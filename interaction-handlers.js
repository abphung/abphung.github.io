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
    event.preventDefault();

    // If zoomed in, don't allow dragging models
    if (isZoomedIn) return;

    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(loadedModels);

    if (intersects.length > 0) {
        isDragging = true;
        draggedModel = intersects[0].object;

        controls.enabled = false;

        if (draggedModel && draggedModel.userData) {
            if (draggedModel.userData.physicsBody) {
                const physicsBody = draggedModel.userData.physicsBody;
                physicsBody.velocity.set(0, 0, 0);
                physicsBody.angularVelocity.set(0, 0, 0);

                // Store the radius of the dragged model's bounding sphere
                draggedModelRadius = physicsBody.shapes[0].radius;

                dragPlane.setFromNormalAndCoplanarPoint(
                    camera.getWorldDirection(dragPlane.normal),
                    intersects[0].point
                );

                dragPoint.copy(intersects[0].point).sub(draggedModel.position);

                // Initialize model positions and time
                lastModelPosition.copy(draggedModel.position);
                currentModelPosition.copy(draggedModel.position);
                lastUpdateTime = performance.now();
            } else {
                console.error('physicsBody not found in draggedModel.userData', draggedModel, intersects[0]);
            }
        } else {
            console.error('Invalid draggedModel or userData in onMouseDown', draggedModel, intersects[0]);
        }
    }
}

function onMouseMove(event) {
    if (isDragging && !isZoomedIn && draggedModel && draggedModel.userData && draggedModel.userData.physicsBody) {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersectionPoint = new THREE.Vector3();
        raycaster.ray.intersectPlane(dragPlane, intersectionPoint);

        intersectionPoint.sub(dragPoint);

        // Ensure the model stays above the floor
        intersectionPoint.y = Math.max(intersectionPoint.y, draggedModelRadius);

        const physicsBody = draggedModel.userData.physicsBody;
        physicsBody.position.copy(intersectionPoint);
        physicsBody.velocity.set(0, 0, 0);

        // Update model positions and calculate velocity
        const currentTime = performance.now();
        const deltaTime = (currentTime - lastUpdateTime) / 1000; // Convert to seconds
        
        lastModelPosition.copy(currentModelPosition);
        currentModelPosition.copy(intersectionPoint);
        
        modelVelocity.subVectors(currentModelPosition, lastModelPosition).divideScalar(deltaTime);

        lastUpdateTime = currentTime;
    }
    else {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        // Update tooltip position immediately
        hoverTooltip.style.left = (event.clientX + 10) + 'px';
        hoverTooltip.style.top = (event.clientY + 10) + 'px';

        // Schedule a hover update
        isHoverUpdatePending = true;
    }
}

function onMouseUp(event) {
    if (isDragging && !isZoomedIn && draggedModel && draggedModel.userData && draggedModel.userData.physicsBody) {
        isDragging = false;
        const physicsBody = draggedModel.userData.physicsBody;
        
        // Apply momentum based on model velocity, but limit it
        const velocityMultiplier = 1; // Adjust this value to control the momentum
        let newVelocity = modelVelocity.multiplyScalar(velocityMultiplier);
        
        // Limit the velocity magnitude
        if (newVelocity.length() > MAX_VELOCITY) {
            newVelocity.normalize().multiplyScalar(MAX_VELOCITY);
        }
        
        physicsBody.velocity.copy(newVelocity);
        physicsBody.position.y += 0.01; // Small upward offset on release

        draggedModel = null;
        draggedModelRadius = 0;

        if (dragJoint) {
            world.removeConstraint(dragJoint);
            dragJoint = null;
        }
    } else if (isDragging) {
        console.error('Invalid draggedModel or physicsBody in onMouseUp');
    }

    isDragging = false;
    draggedModel = null;
    
    // Re-enable controls after a short delay
    setTimeout(() => {
        controls.enabled = true;
        controls.saveState();
        controls.reset();
    }, 100);
}

function onMouseOut() {
    hoverTooltip.style.display = 'none';
}

function onDoubleClick(event) {
    event.preventDefault();

    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(loadedModels);

    if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;

        if (isZoomedIn && intersectedObject === zoomedModel) {
            // If already zoomed in on this model, zoom out
            zoomOut();
        } else {
            // Zoom in on the double-clicked model
            zoomIn(intersectedObject);
        }
    } else if (isZoomedIn) {
        // If double-clicked outside any model while zoomed in, zoom out
        zoomOut();
    }
}

function updateHover() {
    if (isZoomedIn) return;

    if (!isHoverUpdatePending) return;
    
    const currentTime = performance.now();
    if (currentTime - lastHoverUpdateTime < HOVER_UPDATE_INTERVAL) return;
    
    isHoverUpdatePending = false;
    lastHoverUpdateTime = currentTime;

    picker.setFromCamera(mouse, camera);
    const intersects = picker.intersectObjects(loadedModels, true);

    if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;
        const modelName = intersectedObject.userData.fileName || 'Unknown Model';
        console.log(`hovering over model: ${modelName}`, intersectedObject.userData, loadedModels)
        hoverTooltip.textContent = modelName;
        hoverTooltip.style.display = 'block';
    } else {
        hoverTooltip.style.display = 'none';
    }
}

export { isDragging, draggedModel };
