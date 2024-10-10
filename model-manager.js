import * as THREE from 'https://jspm.dev/three@0.132.2';
import { STLLoader } from 'https://jspm.dev/three@0.132.2/examples/jsm/loaders/STLLoader';
import * as CANNON from 'https://jspm.dev/cannon-es@0.20.0';
import { scene, camera, world } from './scene-setup.js';

const loader = new STLLoader();
const loadedModels = [];
let sphereWireframes = [];
const frustum = new THREE.Frustum();
const projScreenMatrix = new THREE.Matrix4();

export async function fetchSTLFiles() {
    const owner = 'abphung';
    const repo = 'abphung.github.io';
    const path = '';
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.filter(file => file.name.toLowerCase().endsWith('.stl'))
               .map(file => ({
                   name: file.name,
                   url: file.download_url
               }));
}

export function loadSTLModel(file, index, count = 1) {
    // ... (Code for loading STL model)
}

function createBoundingSphere(geometry, scale) {
    // ... (Code for creating bounding sphere)
}

export function updateFrustum() {
    camera.updateMatrixWorld();
    projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(projScreenMatrix);
}

export function updateModels() {
    for (let i = 0; i < loadedModels.length; i++) {
        const mesh = loadedModels[i];
        if (mesh && mesh.userData) {
            const physicsBody = mesh.userData.physicsBody;
            mesh.position.copy(physicsBody.position);
            mesh.quaternion.copy(physicsBody.quaternion);
            
            if (sphereWireframes[i]) {
                sphereWireframes[i].position.copy(physicsBody.position);
                sphereWireframes[i].quaternion.copy(physicsBody.quaternion);
            }
            
            if (frustum.containsPoint(mesh.position)) {
                if (!mesh.visible) mesh.visible = true;
            } else {
                if (mesh.visible) mesh.visible = false;
            }
        }
    }
}

export { loadedModels, sphereWireframes };
