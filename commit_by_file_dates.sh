#!/bin/bash

# Usage: ./commit_by_file_dates.sh folder_name
TARGET_FOLDER="$1"

if [ -z "$TARGET_FOLDER" ]; then
  echo "Usage: $0 <folder_name>"
  exit 1
fi

# Ensure the folder exists relative to the current directory
if [ ! -d "$TARGET_FOLDER" ]; then
  echo "Error: Folder '$TARGET_FOLDER' not found in current directory."
  exit 1
fi

# Ensure we are inside a git repo
if [ ! -d ".git" ]; then
  echo "Error: No .git repo found in current directory."
  echo "Run again from the root of a git repository."
  exit 1
fi

# Recursively iterate through files inside the provided folder
find "$TARGET_FOLDER" -type f | while read -r FILE; do
    
  # Get macOS file creation time (birth time) in ISO format
  CREATION_TIME=$(stat -f "%SB" -t "%Y-%m-%dT%H:%M:%S" "$FILE")

  # Stage the file
  git add "$FILE"

  # Create commit with file name and timestamp
  GIT_AUTHOR_DATE="$CREATION_TIME" \
  GIT_COMMITTER_DATE="$CREATION_TIME" \
    git commit -m "Add $FILE"

done

echo "Done! All files from '$TARGET_FOLDER' have been committed using their original creation dates."
