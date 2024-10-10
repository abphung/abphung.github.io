import * as THREE from 'https://jspm.dev/three@0.132.2';
import { camera, renderer, controls } from './scene-setup.js';
import { loadedModels } from './model-manager.js';
import { isZoomedIn, zoomedModel, zoomIn, zoomOut } from './camera-controls.js';

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let isDragging = false;
let draggedModel = null;
let dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
let dragPoint = new THREE.Vector3();

export function initInteractionHandlers(container, hoverTooltip) {
    container.addEventListener('dblclick', onDoubleClick, false);
    container.addEventListener('mousedown', onMouseDown, false);
    container.addEventListener('mousemove', (event) => onMouseMove(event, hoverTooltip), false);
    container.addEventListener('mouseup', onMouseUp, false);
    container.addEventListener('mouseleave', onMouseUp, false);
    container.addEventListener('mouseout', () => onMouseOut(hoverTooltip));
}

function onMouseDown(event) {
    // ... (Code for mouse down event)
}

function onMouseMove(event, hoverTooltip) {
    // ... (Code for mouse move event)
}

function onMouseUp(event) {
    // ... (Code for mouse up event)
}

function onMouseOut(hoverTooltip) {
    hoverTooltip.style.display = 'none';
}

function onDoubleClick(event) {
    // ... (Code for double click event)
}

function updateHover(hoverTooltip) {
    // ... (Code for updating hover tooltip)
}

export { isDragging, draggedModel };
