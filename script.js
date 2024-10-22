import * as THREE from 'https://jspm.dev/three@0.132.2';
import { OrbitControls } from 'https://jspm.dev/three@0.132.2/examples/jsm/controls/OrbitControls';
import { STLLoader } from 'https://jspm.dev/three@0.132.2/examples/jsm/loaders/STLLoader';
import * as CANNON from 'https://jspm.dev/cannon-es@0.20.0';

const owner = 'abphung';
const repo = 'OpenSCADProjects';
const path = '';

const MAX_VELOCITY = 1000; // Maximum velocity magnitude
const colorPalette = [
    '#3498db', // Blue
    '#2ecc71', // Green
    '#e74c3c', // Red
    '#f39c12', // Orange
    '#9b59b6', // Purple
    '#1abc9c', // Teal
    '#34495e', // Dark Blue
    '#95a5a6'  // Gray
];

let scene, camera, renderer, controls, world;
const loader = new STLLoader();
const loadedModels = [];
let boundingSpheres = [];
let totalModelsToLoad = 0;
let loadedModelCount = 0;
let sphereWireframes = [];

// Define the new area size
const areaSize = 500; // Half of the previous 100

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let isDragging = false;
let draggedModel = null;

let dragPlane;
let dragPoint = new THREE.Vector3();

let lastModelPosition = new THREE.Vector3();
let currentModelPosition = new THREE.Vector3();
let modelVelocity = new THREE.Vector3();
let lastUpdateTime = 0;

let draggedModelRadius = 0;

let hoverTooltip;
const picker = new THREE.Raycaster();
let isHoverUpdatePending = false;
let lastHoverUpdateTime = 0;
const HOVER_UPDATE_INTERVAL = 400;

//used to zoom in/out
let previousCameraState = {
    position: new THREE.Vector3(),
    target: new THREE.Vector3()
};
let isZoomedIn = false;
let zoomedModel = null;

const projScreenMatrix = new THREE.Matrix4();

let fadeOutObjects = [];
let fadeInObjects = [];
const fadeDuration = 1000; // Duration of fade effect in milliseconds

let worldObjects = [];

let lastTap = 0;
let debugOverlay;
let lastTouchTimestamp = 0;
let touchCount = 0;

let modelLoadQueue = [];
let isLoadingModel = false;

//used to detirmine if the camera is moving
let isCameraMoving = false;
let lastCameraPosition = new THREE.Vector3();
let lastCameraQuaternion = new THREE.Quaternion();

let isBlogPostVisible = false;

let blogPostOverlay, toggleButton;
let isNarrowScreen = window.innerWidth < 1200//768;
let blogPostOverlayStyleWidth = isNarrowScreen ? `${window.innerWidth}px` : `${window.innerWidth * 0.3}px`;
let blogPostOverlayStyleHeight = isNarrowScreen ? `${window.innerHeight * 0.5}px` : `${window.innerHeight}px`;

function createBlogPostOverlay(duration) {
    blogPostOverlay = document.createElement('div');
    blogPostOverlay.style.position = 'fixed';
    blogPostOverlay.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    blogPostOverlay.style.color = 'white';
    blogPostOverlay.style.boxSizing = 'border-box';
    blogPostOverlay.style.overflow = 'hidden';
    blogPostOverlay.style.zIndex = '1000';

    console.log(`${isNarrowScreen ? 'bottom' : 'right'} ${duration}ms ease-in-out`);
    blogPostOverlay.style.transition = `${isNarrowScreen ? 'bottom' : 'right'} ${duration}ms ease-in-out`;

    // Create content container
    const contentContainer = document.createElement('div');
    contentContainer.style.height = '100%';
    contentContainer.style.width = '100%';
    contentContainer.style.overflowY = 'auto';
    contentContainer.style.padding = '20px';
    blogPostOverlay.appendChild(contentContainer);

    // Create resize handle with orientation based on screen size
    const resizeHandle = document.createElement('div');
    resizeHandle.style.position = 'absolute';
    if (isNarrowScreen) {
        resizeHandle.style.top = '0';
        resizeHandle.style.left = '0';
        resizeHandle.style.width = '100%';
        resizeHandle.style.height = '20px';
        resizeHandle.style.cursor = 'ns-resize';
    } else {
        resizeHandle.style.top = '0';
        resizeHandle.style.left = '0';
        resizeHandle.style.width = '20px';
        resizeHandle.style.height = '100%';
        resizeHandle.style.cursor = 'ew-resize';
    }
    resizeHandle.style.zIndex = '1';
    blogPostOverlay.appendChild(resizeHandle);

    // Create toggle button
    toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Blog Post';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '20px';
    toggleButton.style.right = '20px';
    toggleButton.style.zIndex = '1001';
    toggleButton.addEventListener('click', () => toggleBlogPost(duration));
    
    document.body.appendChild(blogPostOverlay);
    document.body.appendChild(toggleButton);

    let isResizing = false;
    let startY, startX, startHeight, startWidth;

    function disableSelection() {
        document.body.style.userSelect = 'none';
        document.body.style.webkitUserSelect = 'none';
        document.body.style.mozUserSelect = 'none';
        document.body.style.msUserSelect = 'none';
    }

    function enableSelection() {
        document.body.style.userSelect = '';
        document.body.style.webkitUserSelect = '';
        document.body.style.mozUserSelect = '';
        document.body.style.msUserSelect = '';
    }

    resizeHandle.addEventListener('mousedown', (e) => {
        isResizing = true;
        if (isNarrowScreen) {
            startY = e.clientY;
            startHeight = parseInt(window.getComputedStyle(blogPostOverlay).height, 10);
        } else {
            startX = e.clientX;
            startWidth = parseInt(window.getComputedStyle(blogPostOverlay).width, 10);
        }
        
        e.preventDefault();
        disableSelection();
        
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
    });

    function resize(e) {
        if (!isResizing) return;
        e.preventDefault();

        if (isNarrowScreen) {
            const height = startHeight - (e.clientY - startY);
            blogPostOverlayStyleHeight = `${Math.max(200, Math.min(height, window.innerHeight - 100))}px`;
            blogPostOverlay.style.height = blogPostOverlayStyleHeight;
        } else {
            const width = startWidth - (e.clientX - startX);
            blogPostOverlayStyleWidth = `${Math.max(200, Math.min(width, window.innerWidth - 100))}px`;
            blogPostOverlay.style.width = blogPostOverlayStyleWidth;
        }
    }

    function stopResize() {
        isResizing = false;
        enableSelection();
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
        const startPosition = camera.position.clone();
        const startLookAt = controls.target.clone();
        animateCamera(startPosition, startLookAt, 2000, () => {});
    }

    // Function to update content
    blogPostOverlay.updateContent = function(html) {
        contentContainer.innerHTML = html;
    };

    // Add window resize listener to update layout
    window.addEventListener('resize', () => {
        const newIsNarrowScreen = window.innerWidth < 768;
        if (newIsNarrowScreen !== isNarrowScreen) {
            isNarrowScreen = newIsNarrowScreen;
            location.reload(); // Refresh to apply new layout
        }
    });

    return blogPostOverlay;
}

function toggleBlogPost(duration) {
    blogPostOverlay.style.transition = `${isNarrowScreen ? 'bottom' : 'right'} ${duration}ms ease-in-out`;

    if (isBlogPostVisible) {
        hideBlogPost();
    } else {
        showBlogPost(zoomedModel, duration);
    }

    const startPosition = camera.position.clone();
    const startLookAt = controls.target.clone();
    animateCamera(startPosition, startLookAt, 2000, () => {});
}

function showBlogPost(model, duration) {
    if (!blogPostOverlay) createBlogPostOverlay(duration);
    
    const blogPostContent = generateBlogPost(model);
    blogPostOverlay.updateContent(blogPostContent);

    if (isNarrowScreen) {
        blogPostOverlay.style.bottom = '0';
    } else {
        blogPostOverlay.style.right = '0';
    }

    setTimeout(() => {
        toggleButton.style.display = 'block';
    }, duration);

    isBlogPostVisible = true;
}

function hideBlogPost() {
    if (isNarrowScreen) {
        blogPostOverlay.style.bottom = `-${blogPostOverlayStyleHeight}`;
    } else {
        blogPostOverlay.style.right = `-${blogPostOverlayStyleWidth}`;
    }

    if (!isZoomedIn){
        toggleButton.style.display = 'none';
    }

    isBlogPostVisible = false;
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function generateBlogPost(model) {
    if (model.userData.scadContent) {
        const escapedScadContent = escapeHtml(model.userData.scadContent);
        return `
            <h2>${escapeHtml(model.userData.fileName)}</h2>
            <pre><code>${escapedScadContent}</code></pre>
        `;
    } else {
        return `
            <h2>${escapeHtml(model.name)}</h2>
            <p>This is a blog post about ${escapeHtml(model.name)}. 
            It's a fascinating 3D model with many interesting features...</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        `;
    }
}

function getRandomColor() {
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
}

function createDebugOverlay() {
    debugOverlay = document.createElement('div');
    debugOverlay.style.position = 'fixed';
    debugOverlay.style.top = '10px';
    debugOverlay.style.left = '10px';
    debugOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    debugOverlay.style.color = 'white';
    debugOverlay.style.padding = '10px';
    debugOverlay.style.borderRadius = '5px';
    debugOverlay.style.fontFamily = 'monospace';
    debugOverlay.style.fontSize = '12px';
    debugOverlay.style.zIndex = '1000';
    document.body.appendChild(debugOverlay);
}

function updateDebugOverlay(message) {
    console.log(message);
    if (debugOverlay) {
        debugOverlay.innerHTML = message;
    }
}

async function fetchAllFiles(owner, repo, path = '') {
    const cacheKey = `${owner}-${repo}-${path}`;
    const cachedData = localStorage.getItem(cacheKey);
    
    if (cachedData) {
        return JSON.parse(cachedData);
    }
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    
    let token = localStorage.getItem('github_pat');
    let response;
    try {
        response = await fetch(apiUrl, {
            headers: token ? { 'Authorization': `token ${token}` } : {}
        });
        if (response.status === 403) {
            throw new Error('Rate limited');
        }
        const data = await response.json();
        
        let allFiles = [];
        let stlFiles = [];
        let scadFiles = [];
        
        for (const item of data) {
            if (item.type === 'file') {
                const lowerName = item.name.toLowerCase();
                if (lowerName.endsWith('.stl')) {
                    stlFiles.push({
                        name: item.path,
                        url: item.download_url,
                        path: path
                    });
                } else if (lowerName.endsWith('.scad')) {
                    scadFiles.push({
                        name: item.path,
                        url: item.download_url,
                        path: path
                    });
                }
            } else if (item.type === 'dir') {
                const subFiles = await fetchAllFiles(owner, repo, item.path);
                allFiles = allFiles.concat(subFiles);
            }
        }
        
        if (scadFiles.length > 1) {
            console.log(`Multiple SCAD files found in folder ${path}. Using the first matching SCAD file for each STL.`);
        }

        for (const stlFile of stlFiles) {
            const matchingScad = scadFiles.find(scad => scad.path === stlFile.path);
            if (matchingScad) {
                stlFile.scadContent = await fetchFileContent(matchingScad.url, token);
            } 

            allFiles.push(stlFile);
        }
        
        localStorage.setItem(cacheKey, JSON.stringify(allFiles));
        return allFiles;
    } catch (error) {
        if (error.message === 'Rate limited') {
            const userToken = await promptForPAT();
            if (userToken) {
                localStorage.setItem('github_pat', userToken);
                return fetchAllFiles(owner, repo, path); // Retry with the new token
            } else {
                throw new Error('GitHub API rate limit reached. Unable to fetch files without a valid token.');
            }
        } else {
            throw error;
        }
    }
}

async function fetchFileContent(url, token) {
    const response = await fetch(url, {
        headers: token ? { 'Authorization': `token ${token}` } : {}
    });
    return await response.text();
}

function promptForPAT() {
    return new Promise((resolve) => {
        const container = document.getElementById('pat-input-container');
        const input = document.getElementById('pat-input');
        const submit = document.getElementById('pat-submit');

        container.style.display = 'block';

        submit.onclick = () => {
            const token = input.value.trim();
            container.style.display = 'none';
            input.value = '';
            resolve(token);
        };
    });
}

function initScene(container) {
    scene = new THREE.Scene();
    scene.background = new THREE.Color('#f0f4f8'); // Light blue-gray background
    
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

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    world = new CANNON.World({
        gravity: new CANNON.Vec3(0, -600, 0)
    });
    world.defaultContactMaterial.friction = 0.5;
    world.defaultContactMaterial.restitution = 0.3;

    // Define a common material for floor and walls
    const transparentMaterial = new THREE.MeshBasicMaterial({
        color: 0x4a5568, // A soft blue-gray color
        transparent: true,
        opacity: 0.05,
        side: THREE.DoubleSide
    });

    // Create floor
    const planeGeometry = new THREE.PlaneGeometry(areaSize * 2, areaSize * 2);
    const planeMesh = new THREE.Mesh(planeGeometry, transparentMaterial);
    planeMesh.rotation.x = Math.PI / 2;
    planeMesh.position.y = 0;
    scene.add(planeMesh);
    worldObjects.push(planeMesh);

    const planeShape = new CANNON.Plane();
    const planeBody = new CANNON.Body({ mass: 0 });
    planeBody.addShape(planeShape);
    planeBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    world.addBody(planeBody);

    // Create borders (walls)
    const borderHeight = 2 * areaSize;
    const borderThickness = areaSize / 100;
    const borderGeometry = new THREE.BoxGeometry(areaSize * 2, borderHeight, borderThickness);

    const createBorder = (x, z, rotationY) => {
        const borderMesh = new THREE.Mesh(borderGeometry, transparentMaterial);
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

    // Create a drag plane
    dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

    console.log('Scene and physics world initialized');
    animate();
}

function onTouchStart(event) {
    if (event.touches.length === 1) {
        const touch = event.touches[0];
        const currentTime = new Date().getTime();
        
        touchCount++;
        if (currentTime - lastTouchTimestamp < 500) {
            onDoubleTap(touch);
        }
        lastTouchTimestamp = currentTime;

        //handleStart(touch);
        updateDebugOverlay(`Touch Start<br>X: ${touch.clientX}<br>Y: ${touch.clientY}<br>Count: ${touchCount}`);
    }
}

function onTouchMove(event) {
    if (event.touches.length === 1) {
        const touch = event.touches[0];
        handleMove(touch);
        updateDebugOverlay(`Touch Move<br>X: ${touch.clientX}<br>Y: ${touch.clientY}`);
    }
}

function onTouchEnd(event) {
    const touch = event.changedTouches[0];
    handleEnd(touch);
    updateDebugOverlay(`Touch End<br>X: ${touch.clientX}<br>Y: ${touch.clientY}`);
}

function onDoubleTap(event) {
    updateDebugOverlay('Double Tap Detected');
    handleDoubleClick(event);
}

function handleStart(event) {
    try {
        if (isZoomedIn) return;

        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        let closestIntersection = null;
        let closestDistance = Infinity;
        let intersectedSphere = null;

        boundingSpheres.forEach(({ sphere, model }) => {
            const intersection = new THREE.Vector3();
            if (raycaster.ray.intersectSphere(sphere, intersection)) {
                const distance = raycaster.ray.origin.distanceTo(intersection);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIntersection = intersection;
                    intersectedSphere = { sphere, model };
                }
            }
        });

        if (intersectedSphere && closestIntersection) {
            isDragging = true;
            draggedModel = intersectedSphere.model;

            controls.enabled = false;

            if (draggedModel && draggedModel.userData) {
                if (draggedModel.userData.physicsBody) {
                    const physicsBody = draggedModel.userData.physicsBody;
                    physicsBody.velocity.set(0, 0, 0);
                    physicsBody.angularVelocity.set(0, 0, 0);
                    physicsBody.mass = 0;

                    // Store the radius of the dragged model's bounding sphere
                    draggedModelRadius = physicsBody.shapes[0].radius;

                    dragPlane.setFromNormalAndCoplanarPoint(
                        camera.getWorldDirection(dragPlane.normal),
                        closestIntersection
                    );

                    // Set dragPoint to be the vector from the model's center to the intersection point
                    dragPoint.copy(closestIntersection).sub(draggedModel.position);

                    // Initialize model positions and time
                    lastModelPosition.copy(draggedModel.position);
                    currentModelPosition.copy(draggedModel.position);
                    lastUpdateTime = performance.now();
                } else {
                    console.error('physicsBody not found in draggedModel.userData', draggedModel);
                }
            } else {
                console.error('Invalid draggedModel or userData in handleStart', draggedModel);
            }
        }
    } catch (error) {
        updateDebugOverlay(`Error in handleStart: ${error}`);
        throw error;
    }
}

function handleMove(event) {
    try {
        if (isDragging && !isZoomedIn && draggedModel && draggedModel.userData && draggedModel.userData.physicsBody) {
            const rect = renderer.domElement.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            const intersectionPoint = new THREE.Vector3();
            raycaster.ray.intersectPlane(dragPlane, intersectionPoint);

            // Calculate new position by subtracting dragPoint from intersection
            const newPosition = intersectionPoint.sub(dragPoint);

            // Ensure the model stays above the floor
            newPosition.y = Math.max(newPosition.y, draggedModelRadius);

            const physicsBody = draggedModel.userData.physicsBody;
            physicsBody.position.copy(newPosition);
            physicsBody.velocity.set(0, 0, 0);

            // Update model positions and calculate velocity
            const currentTime = performance.now();
            const deltaTime = (currentTime - lastUpdateTime) / 1000; // Convert to seconds
            
            lastModelPosition.copy(currentModelPosition);
            currentModelPosition.copy(newPosition);
            
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

            isHoverUpdatePending = true;
        }
    } catch (error) {
        updateDebugOverlay(`Error in handleMove: ${error}`);
        throw error;
    }
}

function handleEnd(event) {
    try{
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
            physicsBody.mass = 1;

            modelVelocity = new THREE.Vector3();

            draggedModel = null;
            draggedModelRadius = 0;
        }

        isDragging = false;
        draggedModel = null;
        
        // Re-enable controls after a short delay
        setTimeout(() => {
            controls.enabled = true;
            controls.saveState();
            controls.reset();
        }, 100);
    } catch (error) {
        updateDebugOverlay(`${error}`);
        throw error;
    }
}

function updateHover() {
    if (isZoomedIn || isCameraMoving) {
        hoverTooltip.style.display = 'none';
        return;
    }

    if (!isHoverUpdatePending) return;
    
    const currentTime = performance.now();
    if (currentTime - lastHoverUpdateTime < HOVER_UPDATE_INTERVAL) return;
    
    isHoverUpdatePending = false;
    lastHoverUpdateTime = currentTime;

    picker.setFromCamera(mouse, camera);
    const intersectedSphere = boundingSpheres.find(({ sphere }) => picker.ray.intersectsSphere(sphere));

    if (intersectedSphere) {
        const intersectedObject = intersectedSphere.model;
        const modelName = intersectedObject.userData.fileName || 'Unknown Model';
        hoverTooltip.textContent = modelName;
        hoverTooltip.style.display = 'block';
    } else {
        hoverTooltip.style.display = 'none';
    }
}

function onMouseOut() {
    hoverTooltip.style.display = 'none';
}

function handleDoubleClick(event) {
    try{
        if (isZoomedIn){
            zoomOut();
        } else {
            const rect = renderer.domElement.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            const intersectedSphere = boundingSpheres.find(({ sphere }) => raycaster.ray.intersectsSphere(sphere));

            if (intersectedSphere) {
                const intersectedObject = intersectedSphere.model;
                updateDebugOverlay(`Double Click<br>Object: ${intersectedObject.userData.fileName}`);
                zoomIn(intersectedObject);
            } else {
                updateDebugOverlay('Double Click<br>No Object Intersected');
            }
        }
    } catch (error) {
        updateDebugOverlay(`${error}`);
    }
}

function createArrowHelper(direction, color, length = 50) {
    const arrow = new THREE.ArrowHelper(
        direction.normalize(),
        new THREE.Vector3(0, 0, 0),
        length,
        color,
        0.2 * length,
        0.1 * length
    );
    arrow.visible = false;
    scene.add(arrow);
    return arrow;
}

function zoomIn(model) {
    updateDebugOverlay(`Zooming In<br>Model: ${model.userData.fileName}`);
    // Store current camera state
    previousCameraState.position.copy(camera.position);
    previousCameraState.target.copy(controls.target);

    isZoomedIn = true;
    zoomedModel = model;
    hoverTooltip.style.display = 'none';

    showBlogPost(model, 2000);
    const physicsBody = zoomedModel.userData.physicsBody;
    physicsBody.velocity.set(0, 0, 0);
    physicsBody.angularVelocity.set(0, 0, 0);

    // Calculate the bounding sphere of the model
    const boundingSphere = new THREE.Sphere();
    model.geometry.computeBoundingSphere();
    boundingSphere.copy(model.geometry.boundingSphere);
    boundingSphere.applyMatrix4(model.matrixWorld);

    const direction = camera.position.clone().sub(controls.target).normalize();
    const distance = boundingSphere.radius * 2.5;
    const newCameraPosition = boundingSphere.center.clone().add(direction.multiplyScalar(distance));

    // Prepare objects for fading
    fadeOutObjects = loadedModels.filter(obj => obj !== model);
    fadeInObjects = [model];

    // Start fading out objects
    fadeObjects(fadeOutObjects, 1, 0);
    fadeObjects(sphereWireframes, .1, 0)
    fadeObjects(worldObjects, .05, 0);

    // Animate camera movement
    animateCamera(newCameraPosition, boundingSphere.center, 2000, () => {
        // After animation, update controls
        controls.target.copy(boundingSphere.center);
        controls.update();
    });
}

function zoomOut() {
    updateDebugOverlay('Zooming Out');
    fadeInObjects = loadedModels.filter(obj => obj !== zoomedModel);
    isZoomedIn = false;
    zoomedModel = null;

    hideBlogPost();

    // Start fading in objects
    fadeObjects(fadeInObjects, 0, 1);
    fadeObjects(sphereWireframes, 0, .1)
    fadeObjects(worldObjects, 0, .05);

    // Animate camera movement back to previous position
    animateCamera(previousCameraState.position, previousCameraState.target, 2000, () => {
        // After animation, update controls
        controls.target.copy(previousCameraState.target);
        controls.update();
    });
}

function fadeObjects(objects, startOpacity, endOpacity) {
    const startTime = performance.now();

    function updateFade() {
        const currentTime = performance.now();
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / fadeDuration, 1);

        objects.forEach(obj => {
            if (obj.material) {
                if (!obj.material.transparent) {
                    obj.material.transparent = true;
                    obj.material.needsUpdate = true;
                }
                obj.material.opacity = THREE.MathUtils.lerp(startOpacity, endOpacity, progress);
            }
            if (obj.children) {
                obj.children.forEach(child => {
                    if (child.material) {
                        if (!child.material.transparent) {
                            child.material.transparent = true;
                            child.material.needsUpdate = true;
                        }
                        child.material.opacity = THREE.MathUtils.lerp(startOpacity, endOpacity, progress);
                    }
                });
            }
        });

        if (progress < 1) {
            requestAnimationFrame(updateFade);
        } else {
            // If fading out, hide the objects completely
            if (endOpacity === 0) {
                objects.forEach(obj => {
                    obj.visible = false;
                    if (obj.children) {
                        obj.children.forEach(child => {
                            child.visible = false;
                        });
                    }
                });
            }
        }
    }

    // If fading in, make sure objects are visible
    if (endOpacity > 0) {
        objects.forEach(obj => {
            obj.visible = true;
            if (obj.children) {
                obj.children.forEach(child => {
                    child.visible = true;
                });
            }
        });
    }

    updateFade();
}

function animateCamera(targetPosition, targetLookAt, duration, callback) {
    if (isNarrowScreen) {
        blogPostOverlay.style.width = '100%';
        blogPostOverlay.style.height = blogPostOverlayStyleHeight;
        blogPostOverlay.style.right = '0';
        blogPostOverlay.style.transition = `bottom ${duration}ms ease-in-out`;
    } else {
        blogPostOverlay.style.width = blogPostOverlayStyleWidth;
        blogPostOverlay.style.height = '100%';
        blogPostOverlay.style.top = '0';
        blogPostOverlay.style.transition = `right ${duration}ms ease-in-out`;
    }

    let targetWidth, targetHeight;

    console.log(isBlogPostVisible)
    if (isNarrowScreen) {
        targetWidth = window.innerWidth;
        targetHeight = isBlogPostVisible ? window.innerHeight - parseFloat(blogPostOverlayStyleHeight) : window.innerHeight;
    } else {
        targetWidth = isBlogPostVisible ? window.innerWidth - parseFloat(blogPostOverlayStyleWidth) : window.innerWidth;
        targetHeight = window.innerHeight;
    }

    console.log(targetWidth, targetHeight)

    // Get starting values
    const startWidth = renderer.domElement.width;
    const startHeight = renderer.domElement.height;
    const startPosition = camera.position.clone();
    const startLookAt = controls.target.clone();
    const startTime = performance.now();

    function updateCamera(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Use an easing function for smooth animation
        const easeProgress = easeInOutCubic(progress);

        // Interpolate renderer size
        const currentWidth = startWidth + (targetWidth - startWidth) * easeProgress;
        const currentHeight = startHeight + (targetHeight - startHeight) * easeProgress;
        
        // Update renderer size
        renderer.setSize(currentWidth, currentHeight);
        renderer.render(scene, camera);
        
        // Update camera aspect ratio
        camera.aspect = currentWidth / currentHeight;
        camera.updateProjectionMatrix();

        // Update camera position and look-at
        camera.position.lerpVectors(startPosition, targetPosition, easeProgress);
        controls.target.lerpVectors(startLookAt, targetLookAt, easeProgress);

        // Rotate zoomed model if it exists
        if (zoomedModel) {
            const startQuaternion = zoomedModel.quaternion.clone();
            const targetQuaternion = new THREE.Quaternion();
            targetQuaternion.setFromAxisAngle(new THREE.Vector3(-1, 0, 0), Math.PI / 2);
            zoomedModel.quaternion.slerpQuaternions(startQuaternion, targetQuaternion, easeProgress);
            zoomedModel.userData.physicsBody.quaternion.copy(zoomedModel.quaternion);
        }
        
        controls.update();

        if (progress < 1) {
            requestAnimationFrame(updateCamera);
        } else {
            // Ensure final state is set
            renderer.setSize(targetWidth, targetHeight);
            if (callback) {
                callback();
            }
        }
    }

    requestAnimationFrame(updateCamera);
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function createBoundingSphere(geometry, scale) {
    geometry.computeBoundingSphere();
    const sphere = geometry.boundingSphere;
    const radius = sphere.radius * scale;
    const sphereGeometry = new THREE.SphereGeometry(radius, 16, 16);
    const wireframe = new THREE.WireframeGeometry(sphereGeometry);
    const sphereWireframe = new THREE.LineSegments(wireframe);
    sphereWireframe.material = new THREE.LineBasicMaterial({
        color: 0x4a5568,
        linewidth: 1,  // Set to 1 for thinnest possible line
        opacity: .1,
        transparent: true
    });
    sphereWireframe.visible = !isZoomedIn;

    const cannonShape = new CANNON.Sphere(radius);

    return { visual: sphereWireframe, physical: cannonShape, radius: radius };
}

function queueModelLoad(file, index, count = 1, i = 0) {
    setTimeout(() => {
        modelLoadQueue.push({ file, index, count, i });
        processModelQueue();
    }, index * 1000); // Adjust this delay as needed
}

function processModelQueue() {
    if (isLoadingModel || modelLoadQueue.length === 0) return;
    
    isLoadingModel = true;
    const { file, index, count, i } = modelLoadQueue.shift();
    
    loadSTLModel(file, index, count, i)
        .then(() => {
            isLoadingModel = false;
            processModelQueue(); // Process next item in queue
        })
        .catch(error => {
            console.error(`Error loading model ${file.name}:`, error);
            isLoadingModel = false;
            processModelQueue(); // Continue to next item even if there's an error
        });
}

function loadSTLModel(file, index, count = 1, i = 0) {
    return new Promise((resolve, reject) => {
        const startTime = performance.now();
        loader.load(
            file.url,
            (geometry) => {
                const geometryLoadTime = performance.now() - startTime;
                //updateDebugOverlay(`Geometry loaded: ${file.name} (${geometryLoadTime.toFixed(2)}ms)`);

                const material = new THREE.MeshPhongMaterial({ 
                    color: new THREE.Color(getRandomColor()),
                    specular: 0x111111, 
                    shininess: 30
                });

                const mesh = new THREE.Mesh(geometry, material);
                mesh.userData.fileName = file.name;
                mesh.userData.scadContent = file.scadContent
                mesh.visible = !isZoomedIn;

                const geometryProcessStart = performance.now();
                geometry.center();
                mesh.rotation.x = -Math.PI / 2;
                const geometryProcessTime = performance.now() - geometryProcessStart;
                //updateDebugOverlay(`Geometry processed (${geometryProcessTime.toFixed(2)}ms)`);

                const boundingSphereStart = performance.now();
                const { visual: sphereWireframe, physical: shape, radius } = createBoundingSphere(geometry, 1);
                sphereWireframe.position.copy(mesh.position);
                sphereWireframe.rotation.copy(mesh.rotation);
                sphereWireframe.material.color.setHex(0x4a5568);
                scene.add(sphereWireframe);
                sphereWireframes.push(sphereWireframe);
                const boundingSphere = new THREE.Sphere(mesh.position.clone(), radius);
                boundingSpheres.push({ sphere: boundingSphere, model: mesh });
                const boundingSphereTime = performance.now() - boundingSphereStart;
                //updateDebugOverlay(`Bounding sphere created (${boundingSphereTime.toFixed(2)}ms)`);

                const physicsStart = performance.now();
                const spawnHeight = 500 + (index * count + i) * 10;
                const offsetRange = 20;
                const offsetX = (Math.random() - 0.5) * offsetRange * count;
                const offsetZ = (Math.random() - 0.5) * offsetRange * count;
                
                const body = new CANNON.Body({
                    mass: 1,
                    shape: shape,
                    position: new CANNON.Vec3(offsetX, spawnHeight, offsetZ),
                    linearDamping: 0.5,
                    angularDamping: 0.5,
                });

                const initialVelocity = new CANNON.Vec3(
                    (Math.random() - 0.5) * 10,
                    0,
                    (Math.random() - 0.5) * 10
                );
                body.velocity.copy(initialVelocity);

                body.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
                world.addBody(body);
                sphereWireframe.userData.physicsBody = body;
                mesh.userData.physicsBody = body;
                const physicsTime = performance.now() - physicsStart;
                //updateDebugOverlay(`Physics body created (${physicsTime.toFixed(2)}ms)`);

                const sceneAddStart = performance.now();
                scene.add(mesh);
                loadedModels.push(mesh);
                const sceneAddTime = performance.now() - sceneAddStart;
                //updateDebugOverlay(`Model added to scene (${sceneAddTime.toFixed(2)}ms)`);

                loadedModelCount++;
                const totalTime = performance.now() - startTime;
                //updateDebugOverlay(`Model ${file.name} fully loaded (${totalTime.toFixed(2)}ms)`);
                resolve();
            },
            (xhr) => {
                const progress = xhr.loaded / xhr.total * 100;
                //updateDebugOverlay(`${file.name} ${progress.toFixed(2)}% loaded`);
            },
            (error) => {
                updateDebugOverlay(`Error loading ${file.name}: ${error}`);
                loadedModelCount++;
                reject(error);
            }
        );
    });
}

function animate() {
    requestAnimationFrame(animate);
    
    try {
        world.step(1 / 60);
    } catch (error) {
        console.error('Error in physics simulation step:', error);
    }

    // Check if camera is moving
    if (!camera.position.equals(lastCameraPosition) || !camera.quaternion.equals(lastCameraQuaternion)) {
        isCameraMoving = true;
        hoverTooltip.style.display = 'none';
    } else {
        isCameraMoving = false;
    }

    // Update last camera position and quaternion
    lastCameraPosition.copy(camera.position);
    lastCameraQuaternion.copy(camera.quaternion);

    for (let i = 0; i < loadedModels.length; i++) {
        const mesh = loadedModels[i];
        if (mesh && mesh.userData && mesh != zoomedModel) {
            const physicsBody = mesh.userData.physicsBody;
            mesh.position.copy(physicsBody.position);
            mesh.quaternion.copy(physicsBody.quaternion);
            
            // Update sphere wireframe position
            if (sphereWireframes[i]) {
                sphereWireframes[i].position.copy(physicsBody.position);
                sphereWireframes[i].quaternion.copy(physicsBody.quaternion);
            }

            if (boundingSpheres[i]) {
                boundingSpheres[i].sphere.center.copy(physicsBody.position);
            }
        }
    }

    controls.update();

    updateHover();

    renderer.render(scene, camera);
}

function handleResize() {
    const container = document.getElementById('stl-viewer');
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

async function initGallery() {
    try {
        updateDebugOverlay('Fetching files from GitHub...');
        const startTime = performance.now();
        const files = await fetchAllFiles(owner, repo);
        const fetchTime = performance.now() - startTime;
        updateDebugOverlay(`Fetched ${files.length} files in ${fetchTime.toFixed(2)}ms`);
        console.log('Fetched files:', files);

        const container = document.getElementById('stl-viewer');

        hoverTooltip = document.getElementById('hoverTooltip');

        createDebugOverlay();

        initScene(container);

        totalModelsToLoad = files.length;
        loadedModelCount = 0;

        const count = 1;
        for (let i = 0; i < count; i++) {
            files.forEach((file, index) => {
                queueModelLoad(file, index, count, i);
            });
        }

        renderer.domElement.addEventListener('touchstart', onTouchStart, false);
        renderer.domElement.addEventListener('dblclick', handleDoubleClick, false);
        renderer.domElement.addEventListener('mousedown', handleStart, false);
        renderer.domElement.addEventListener('mousemove', handleMove, false);
        renderer.domElement.addEventListener('mouseup', handleEnd, false);
        renderer.domElement.addEventListener('mouseleave', handleEnd, false);
        renderer.domElement.addEventListener('mouseout', onMouseOut);

        window.addEventListener('resize', handleResize);
    } catch (error) {
        console.error('Error fetching STL files:', error);
        document.getElementById('gallery').innerHTML = `
            <p>Error loading STL files: ${error.message}</p>
            <p>Please refresh the page to try again.</p>
        `;
    }
}

initGallery();