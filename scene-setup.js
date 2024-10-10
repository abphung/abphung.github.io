import * as THREE from 'https://jspm.dev/three@0.132.2';
import * as CANNON from 'https://jspm.dev/cannon-es@0.20.0';
import { OrbitControls } from 'https://jspm.dev/three@0.132.2/examples/jsm/controls/OrbitControls';
import { createUpIndicator, updateUpIndicator } from './camera-controls.js';
import { updateFrustum, updateModels } from './model-manager.js';

let scene, camera, renderer, controls, world;
const areaSize = 500;
let upIndicatorArrow;

export function initScene(container) {
    scene = new THREE.Scene();
    scene.background = new THREE.Color('#f0f4f8');
    
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 5*areaSize);
    camera.position.set(1.5*areaSize, 1.5*areaSize, 1.5*areaSize);
    camera.lookAt(0, 0, 0);
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    controls.addEventListener('change', updateFrustum);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    world = new CANNON.World({ gravity: new CANNON.Vec3(0, -600, 0) });
    world.defaultContactMaterial.friction = 0.5;
    world.defaultContactMaterial.restitution = 0.3;

    // Create floor and borders
    createFloorAndBorders();

    upIndicatorArrow = createUpIndicator();

    window.addEventListener('resize', handleResize);
}

function createFloorAndBorders() {
    // ... (Code for creating floor and borders)
}

export function animate() {
    requestAnimationFrame(animate);
    
    try {
        world.step(1 / 60);
    } catch (error) {
        console.error('Error in physics simulation step:', error);
    }
    
    updateFrustum();
    updateModels();
    controls.update();
    updateUpIndicator(camera, upIndicatorArrow);

    renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);

    renderer.clearDepth();
    renderer.setViewport(window.innerWidth - 60, window.innerHeight - 60, 50, 50);
    renderer.render(upIndicatorArrow.scene, upIndicatorArrow.camera);
}

function handleResize() {
    const container = document.getElementById('stl-viewer');
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
}

export { scene, camera, renderer, controls, world };
