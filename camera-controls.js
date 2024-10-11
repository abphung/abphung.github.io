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
    // Store current camera state
    previousCameraState.position.copy(camera.position);
    previousCameraState.target.copy(controls.target);

    isZoomedIn = true;
    zoomedModel = model;

    // Calculate the bounding sphere of the model
    const boundingSphere = new THREE.Sphere();
    model.geometry.computeBoundingSphere();
    boundingSphere.copy(model.geometry.boundingSphere);
    boundingSphere.applyMatrix4(model.matrixWorld);

    // Calculate the ideal camera position
    const idealDistance = boundingSphere.radius * 2.5;
    
    // Get the model's forward direction (negative Z-axis in model space)
    const modelForward = new THREE.Vector3(1, 1, 1).applyQuaternion(model.quaternion);
    modelForward.normalize();

    // Calculate the new camera position
    const newCameraPosition = new THREE.Vector3().addVectors(boundingSphere.center, modelForward.multiplyScalar(idealDistance));
    
    // Get the model's up vector (Y-axis in model space)
    const modelUp = new THREE.Vector3(0, 0, 1).applyQuaternion(model.quaternion);

    if (!forwardArrow) {
        forwardArrow = createArrowHelper(modelForward, 0xff0000); // Red for forward
    }
    if (!upArrow) {
        upArrow = createArrowHelper(modelUp, 0x00ff00); // Green for up
    }

    // Position arrows at the center of the model
    const modelCenter = boundingSphere.center;
    forwardArrow.position.copy(modelCenter);
    upArrow.position.copy(modelCenter);

    // Set arrow directions
    forwardArrow.setDirection(modelForward);
    upArrow.setDirection(modelUp);

    // Make arrows visible
    forwardArrow.visible = true;
    upArrow.visible = true;

    // Calculate the rotation to look at the model
    targetQuat.setFromRotationMatrix(
        new THREE.Matrix4().lookAt(newCameraPosition, boundingSphere.center, modelUp)
    );
    console.log(model.quaternion, modelForward, modelUp)
    // Prepare objects for fading
    fadeOutObjects = loadedModels.filter(obj => obj !== model);
    fadeInObjects = [model];

    // Start fading out objects
    fadeObjects(fadeOutObjects, 1, 0);
    fadeObjects(sphereWireframes, 1, 0)
    fadeObjects(worldObjects, 1, 0);

    // Animate camera movement
    animateCamera(newCameraPosition, boundingSphere.center, targetQuat, () => {
        // After animation, update controls
        controls.target.copy(boundingSphere.center);
        controls.up.copy(modelUp);
        controls.update();
    });
}

export function zoomOut() {
    isZoomedIn = false;
    zoomedModel = null;

    if (forwardArrow) forwardArrow.visible = false;
    if (upArrow) upArrow.visible = false;

    // Prepare objects for fading
    fadeInObjects = loadedModels;
    fadeOutObjects = [zoomedModel];

    // Start fading in objects
    fadeObjects(fadeInObjects, 0, 1);
    fadeObjects(sphereWireframes, 0, 1)
    fadeObjects(worldObjects, 0, 1);

    // Animate camera movement back to previous position
    animateCamera(previousCameraState.position, previousCameraState.target, () => {
        // After animation, update controls
        controls.target.copy(previousCameraState.target);
        controls.up.set(0, 1, 0);
        controls.update();
    });
}

function animateCamera(targetPosition, targetLookAt, targetQuaternion, callback) {
    const startPosition = camera.position.clone();
    const startLookAt = controls.target.clone();
    const startQuaternion = camera.quaternion.clone();
    const duration = 2000; // Animation duration in milliseconds
    const startTime = performance.now();

    function updateCamera(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Use an easing function for smooth animation
        const easeProgress = easeInOutCubic(progress);

        camera.position.lerpVectors(startPosition, targetPosition, easeProgress);
        controls.target.lerpVectors(startLookAt, targetLookAt, easeProgress);
        
        camera.quaternion.slerpQuaternions(startQuaternion, targetQuaternion, easeProgress)
        // Smoothly interpolate the camera's quaternion
        // THREE.Quaternion.slerp(startQuaternion, targetQuaternion, camera.quaternion, easeProgress);
        
        camera.updateProjectionMatrix();
        controls.update();

        if (progress < 1) {
            requestAnimationFrame(updateCamera);
        } else if (callback) {
            callback();
        }
    }

    requestAnimationFrame(updateCamera);
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export { isZoomedIn, zoomedModel };
