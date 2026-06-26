var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: (/* @__PURE__ */ new Date()).toISOString() });
  });
  app.post("/api/translate", async (req, res) => {
    try {
      const { englishWord, customKey, existingWords, model } = req.body;
      const targetModel = model || "gemini-3.5-flash";
      if (!englishWord) {
        res.status(400).json({ error: "English text or word is required" });
        return;
      }
      let apiKey = customKey || process.env.GEMINI_API_KEY;
      if (apiKey) {
        apiKey = apiKey.trim().replace(/^['"]|['"]$/g, "");
      }
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
        res.status(400).json({
          error: "Gemini API Key is not configured. Please supply an API key in the settings panel to enable auto-generation of words."
        });
        return;
      }
      const ai = new import_genai.GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build"
          }
        }
      });
      const prompt = `You are a bilingual Vietnamese-English educator. Handle translation and vocabulary extraction for the input: "${englishWord.trim()}".

List of words already in the user's dictionary (DO NOT generate entries for these if extracting from a sentence):
${JSON.stringify(existingWords || [])}

INSTRUCTIONS:
1. Determine if the input is a single English word OR a full sentence/phrase.

2. If the input is a single word:
   - Identify all standard, common translation meanings of this English word in Vietnamese (e.g., if there are multiple parts of speech or multiple different distinct translations for the same part of speech).
   - For each distinct translation meaning, generate a separate independent entry in the "entries" array. For example, if "cool" translates to "m\xE1t m\u1EBB" (Adjective) and "ng\u1EA7u" (Adjective), generate two separate entries in the array instead of combining them into "m\xE1t m\u1EBB, ng\u1EA7u".
   - Each entry should have exactly one translation in the "vietnamese" field, and its own 3 helpful example sentences illustrating that specific meaning.

3. If the input is a full sentence or phrase:
   - Extract the meaningful, individual words from this sentence (e.g., nouns, verbs, adjectives, adverbs) that are useful for language learning.
   - Normalize them to their base/dictionary forms (e.g., "books" -> "book", "reading" -> "read", "went" -> "go").
   - Filter out any extracted words that are already present in the user's existing dictionary list shown above.
   - For each remaining unique word, if it has multiple distinct common translations/meanings in Vietnamese, generate multiple separate entries in the "entries" array (one for each key translation), each with exactly one distinct translation in the "vietnamese" field.
   - For each such entry, the first of these 3 example sentences MUST be the exact original sentence input ("${englishWord.trim()}") paired with its correct, complete Vietnamese translation. The other 2 example sentences must be newly generated helpful, diverse examples showcasing that translation.

Respond with accurate Vietnamese markings/accents. Ensure all JSON fields are populated.`;
      const response = await ai.models.generateContent({
        model: targetModel,
        contents: prompt,
        config: {
          systemInstruction: "You are an elite bilingual Vietnamese-English educator specializing in language textbooks and vocabulary flashcards. Always respond with correct Vietnamese accents (diacritics) and proper casing.",
          responseMimeType: "application/json",
          responseSchema: {
            type: import_genai.Type.OBJECT,
            properties: {
              isSentence: { type: import_genai.Type.BOOLEAN, description: "True if the original user input was a full sentence or phrase" },
              entries: {
                type: import_genai.Type.ARRAY,
                items: {
                  type: import_genai.Type.OBJECT,
                  properties: {
                    english: { type: import_genai.Type.STRING, description: "The sanitized English word in base form" },
                    partOfSpeech: { type: import_genai.Type.STRING, description: "The part of speech, e.g., Noun, Verb, Adjective, Adverb" },
                    vietnamese: { type: import_genai.Type.STRING, description: "Standard, correct Vietnamese translation of this word" },
                    examples: {
                      type: import_genai.Type.ARRAY,
                      items: { type: import_genai.Type.STRING },
                      description: "3 correct, natural example sentences in Vietnamese. The first MUST be the original input sentence if in sentence mode."
                    },
                    exampleTranslations: {
                      type: import_genai.Type.ARRAY,
                      items: { type: import_genai.Type.STRING },
                      description: "English translation corresponding to each Vietnamese example sentence in order."
                    }
                  },
                  required: ["english", "partOfSpeech", "vietnamese", "examples", "exampleTranslations"]
                }
              }
            },
            required: ["isSentence", "entries"]
          }
        }
      });
      const responseText = response.text;
      if (!responseText) {
        throw new Error("Gemini API returned an empty response");
      }
      const parsedResult = JSON.parse(responseText.trim());
      res.json({ success: true, isSentence: parsedResult.isSentence, entries: parsedResult.entries || [] });
    } catch (err) {
      console.error("Translation api error:", err);
      let errorDetails = err.message || String(err);
      if (err.status) {
        errorDetails += ` (HTTP ${err.status})`;
      } else if (err.statusCode) {
        errorDetails += ` (HTTP ${err.statusCode})`;
      }
      if (err.errorDetails) {
        try {
          errorDetails += ` - ${typeof err.errorDetails === "object" ? JSON.stringify(err.errorDetails) : err.errorDetails}`;
        } catch (_) {
        }
      }
      res.status(500).json({
        error: "Failed to generate translation. Ensure your API key is valid and try again.",
        details: errorDetails
      });
    }
  });
  app.post("/api/alternatives", async (req, res) => {
    try {
      const { englishWord, partOfSpeech, currentTranslation, userPrompt, customKey, model } = req.body;
      const targetModel = model || "gemini-3.5-flash";
      if (!englishWord) {
        res.status(400).json({ error: "English word or text is required" });
        return;
      }
      let apiKey = customKey || process.env.GEMINI_API_KEY;
      if (apiKey) {
        apiKey = apiKey.trim().replace(/^['"]|['"]$/g, "");
      }
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
        res.status(400).json({
          error: "Gemini API Key is not configured. Please supply an API key in the settings panel to enable auto-generation of alternative translations."
        });
        return;
      }
      const ai = new import_genai.GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build"
          }
        }
      });
      const prompt = `You are an elite bilingual Vietnamese-English educator. Provide alternative Vietnamese translations for the English term: "${englishWord.trim()}".
      
Current translation: "${currentTranslation || "N/A"}"
Part of speech: "${partOfSpeech || "N/A"}"
User specification / prompt request: "${userPrompt || "Provide common and accurate alternatives"}"

INSTRUCTIONS:
1. Generate exactly 3 alternative Vietnamese translations for this English term, taking the user's specification/prompt request into account.
2. For each alternative translation, provide:
   - The Vietnamese word/phrase (with correct diacritics/accents)
   - The part of speech
   - A short, clear explanation in English of the shade of meaning, nuance, or context in which this translation is preferred (e.g. "More informal", "Used specifically in Southern Vietnam", "Familiar spoken language", "Literary/Poetic context", "Noun form of the action")
   - 2 natural, diverse example sentences in Vietnamese utilizing this translation.
   - Corresponding English translations for these examples in the "exampleTranslations" field.
   
Respond with correct JSON matching the response schema.`;
      const response = await ai.models.generateContent({
        model: targetModel,
        contents: prompt,
        config: {
          systemInstruction: "You are an elite bilingual Vietnamese-English educator specializing in language textbooks and vocabulary flashcards. Always respond with correct Vietnamese accents (diacritics) and proper casing.",
          responseMimeType: "application/json",
          responseSchema: {
            type: import_genai.Type.OBJECT,
            properties: {
              alternatives: {
                type: import_genai.Type.ARRAY,
                items: {
                  type: import_genai.Type.OBJECT,
                  properties: {
                    vietnamese: { type: import_genai.Type.STRING, description: "The alternative Vietnamese translation" },
                    partOfSpeech: { type: import_genai.Type.STRING, description: "The part of speech" },
                    explanation: { type: import_genai.Type.STRING, description: "A short explanation of when or why to use this translation" },
                    examples: {
                      type: import_genai.Type.ARRAY,
                      items: { type: import_genai.Type.STRING },
                      description: "2 correct, natural example sentences in Vietnamese."
                    },
                    exampleTranslations: {
                      type: import_genai.Type.ARRAY,
                      items: { type: import_genai.Type.STRING },
                      description: "English translation corresponding to each Vietnamese example sentence in order."
                    }
                  },
                  required: ["vietnamese", "partOfSpeech", "explanation", "examples", "exampleTranslations"]
                }
              }
            },
            required: ["alternatives"]
          }
        }
      });
      const responseText = response.text;
      if (!responseText) {
        throw new Error("Gemini API returned an empty response");
      }
      const parsedResult = JSON.parse(responseText.trim());
      res.json({ success: true, alternatives: parsedResult.alternatives || [] });
    } catch (err) {
      console.error("Alternatives api error:", err);
      let errorDetails = err.message || String(err);
      if (err.status) {
        errorDetails += ` (HTTP ${err.status})`;
      } else if (err.statusCode) {
        errorDetails += ` (HTTP ${err.statusCode})`;
      }
      if (err.errorDetails) {
        try {
          errorDetails += ` - ${typeof err.errorDetails === "object" ? JSON.stringify(err.errorDetails) : err.errorDetails}`;
        } catch (_) {
        }
      }
      res.status(500).json({
        error: "Failed to generate alternative translations. Ensure your API key is valid and try again.",
        details: errorDetails
      });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Vietnamese Flashcards Server running on http://127.0.0.1:${PORT}`);
  });
}
startServer();
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
//# sourceMappingURL=server.cjs.map
