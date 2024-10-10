import * as THREE from 'https://jspm.dev/three@0.132.2';
import { camera, controls } from './scene-setup.js';

let previousCameraState = {
    position: new THREE.Vector3(),
    target: new THREE.Vector3()
};
let isZoomedIn = false;
let zoomedModel = null;

export function createUpIndicator() {
    const arrowGeometry = new THREE.ConeGeometry(5, 20, 32);
    const arrowMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const arrowMesh = new THREE.Mesh(arrowGeometry, arrowMaterial);
    
    const indicatorScene = new THREE.Scene();
    indicatorScene.add(arrowMesh);
    
    const indicatorCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    indicatorCamera.position.set(0, 0, 5);
    
    return { scene: indicatorScene, camera: indicatorCamera, mesh: arrowMesh };
}

export function updateUpIndicator(camera, upIndicatorArrow) {
    const cameraUp = new THREE.Vector3(0, 1, 0).applyQuaternion(camera.quaternion);
    const arrowQuaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), cameraUp);
    upIndicatorArrow.mesh.quaternion.copy(arrowQuaternion);
}

export function zoomIn(model) {
    // ... (Code for zooming in)
}

export function zoomOut() {
    // ... (Code for zooming out)
}

function animateCamera(targetPosition, targetLookAt, targetQuaternion, callback) {
    // ... (Code for animating camera)
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export { isZoomedIn, zoomedModel };
