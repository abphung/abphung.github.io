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
    // Create floor
    const planeShape = new CANNON.Plane();
    const planeBody = new CANNON.Body({ mass: 0 });
    planeBody.addShape(planeShape);
    planeBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    world.addBody(planeBody);

    // Reduce ground friction
    const groundMaterial = new CANNON.Material('ground');
    planeBody.material = groundMaterial;

    const objectMaterial = new CANNON.Material('object');
    const groundObjectContact = new CANNON.ContactMaterial(groundMaterial, objectMaterial, {
        friction: 0.2, // Reduced friction (default is 0.3)
        restitution: 0.3 // Slight increase in bounciness
    });
    world.addContactMaterial(groundObjectContact);

    const planeGeometry = new THREE.PlaneGeometry(areaSize * 2, areaSize * 2);
    const planeMaterial = new THREE.MeshBasicMaterial({ color: '#e2e8f0', side: THREE.DoubleSide });
    const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    planeMesh.rotation.x = Math.PI / 2;
    planeMesh.position.y = 0;
    scene.add(planeMesh);
    worldObjects.push(planeMesh);

    // Create borders
    const borderHeight = areaSize/3;
    const borderThickness = areaSize/100;
    const borderGeometry = new THREE.BoxGeometry(areaSize * 2, borderHeight, borderThickness);
    const borderMaterial = new THREE.MeshBasicMaterial({ color: '#4a5568' });

    const createBorder = (x, z, rotationY) => {
        const borderMesh = new THREE.Mesh(borderGeometry, borderMaterial);
        borderMesh.position.set(x, borderHeight / 2, z);
        borderMesh.rotation.y = rotationY;
        scene.add(borderMesh);
        worldObjects.push(borderMesh);

        const borderShape = new CANNON.Box(new CANNON.Vec3(areaSize, borderHeight / 2, borderThickness / 2));
        const borderBody = new CANNON.Body({ mass: 0 });
        borderBody.addShape(borderShape);
        borderBody.position.set(x, borderHeight / 2, z);
        borderBody.quaternion.setFromEuler(0, rotationY, 0);
        world.addBody(borderBody);
    };

    // Create four borders
    createBorder(0, areaSize, 0);
    createBorder(0, -areaSize, 0);
    createBorder(areaSize, 0, Math.PI / 2);
    createBorder(-areaSize, 0, Math.PI / 2);
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
