import { initScene, animate } from './scene-setup.js';
import { fetchSTLFiles, loadSTLModel } from './model-manager.js';
import { initInteractionHandlers } from './interaction-handlers.js';

async function initGallery() {
    try {
        const files = await fetchSTLFiles();
        console.log('Fetched files:', files);

        const container = document.getElementById('stl-viewer');
        const hoverTooltip = document.getElementById('hoverTooltip');

        initScene(container);
        initInteractionHandlers(container, hoverTooltip);

        files.forEach((file, index) => {
            setTimeout(() => loadSTLModel(file, index, 1), index * 1000);
        });

        animate();
    } catch (error) {
        console.error('Error fetching STL files:', error);
        document.getElementById('gallery').innerHTML = '<p>Error loading STL files. Please check the console for details.</p>';
    }
}

initGallery();
