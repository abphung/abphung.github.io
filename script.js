import * as THREE from 'https://jspm.dev/three@0.132.2';
import { STLLoader } from 'https://jspm.dev/three@0.132.2/examples/jsm/loaders/STLLoader';

const owner = 'abphung';
const repo = 'OpenSCADProjects';
const path = '';

const colorPalette = [
    '#3498db', '#2ecc71', '#e74c3c', '#f39c12',
    '#9b59b6', '#1abc9c', '#34495e', '#95a5a6'
];

let scene, camera, renderer;
const loader = new STLLoader();
const loadedModels = [];
let boundingSpheres = [];
let totalModelsToLoad = 0;
let loadedModelCount = 0;
let sphereWireframes = [];

const MODEL_SIZE = 50;
let gridSize = 0;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

let hoverTooltip;
const picker = new THREE.Raycaster();
let isHoverUpdatePending = false;
let lastHoverUpdateTime = 0;
const HOVER_UPDATE_INTERVAL = 400;

let previousCameraState = {
    position: new THREE.Vector3()
};
let isZoomedIn = false;
let zoomedModel = null;

let fadeOutObjects = [];
let fadeInObjects = [];
const fadeDuration = 1000;

let modelLoadQueue = [];
let isLoadingModel = false;

let scrollOffset = 0;
let totalGridHeight = 0;

let isBlogPostVisible = false;

let blogPostOverlay, toggleButton;
let isNarrowScreen = window.innerWidth < 1200;
let blogPostOverlayStyleWidth = isNarrowScreen ? `${window.innerWidth}px` : `${window.innerWidth * 0.3}px`;
let blogPostOverlayStyleHeight = isNarrowScreen ? `${window.innerHeight * 0.75}px` : `${window.innerHeight}px`;

function createBlogPostOverlay(duration) {
    blogPostOverlay = document.createElement('div');
    blogPostOverlay.style.position = 'fixed';
    blogPostOverlay.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    blogPostOverlay.style.color = 'white';
    blogPostOverlay.style.boxSizing = 'border-box';
    blogPostOverlay.style.overflow = 'hidden';
    blogPostOverlay.style.zIndex = '1000';

    if (isNarrowScreen) {
        blogPostOverlay.style.borderTopLeftRadius = `${window.innerWidth * 0.1}px`;
        blogPostOverlay.style.borderTopRightRadius = `${window.innerWidth * 0.1}px`;
    } else {
        blogPostOverlay.style.borderTopLeftRadius = `${window.innerHeight * 0.05}px`;
        blogPostOverlay.style.borderBottomLeftRadius = `${window.innerHeight * 0.05}px`;
    }

    blogPostOverlay.style.transition = `${isNarrowScreen ? 'bottom' : 'right'} ${duration}ms ease-in-out`;

    const contentContainer = document.createElement('div');
    contentContainer.style.height = '100%';
    contentContainer.style.width = '100%';
    contentContainer.style.overflowY = 'auto';
    contentContainer.style.padding = '20px';
    blogPostOverlay.appendChild(contentContainer);

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
        animateCamera(startPosition, new THREE.Vector3(0, 0, 0), 2000, () => {});
    }

    blogPostOverlay.updateContent = function(html) {
        contentContainer.innerHTML = html;
    };

    window.addEventListener('resize', () => {
        const newIsNarrowScreen = window.innerWidth < 768;
        if (newIsNarrowScreen !== isNarrowScreen) {
            isNarrowScreen = newIsNarrowScreen;
            location.reload();
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
    animateCamera(startPosition, new THREE.Vector3(0, 0, 0), 2000, () => {});
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
        `;
    }
}

function getRandomColor() {
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
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
                return fetchAllFiles(owner, repo, path);
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
    scene.background = new THREE.Color('#f0f4f8');
    
    // Use orthographic camera for 2D-like view
    const aspect = container.clientWidth / container.clientHeight;
    const viewportWidth = container.clientWidth;
    const viewportHeight = container.clientHeight;
    
    camera = new THREE.OrthographicCamera(
        viewportWidth / -2,
        viewportWidth / 2,
        viewportHeight / 2,
        viewportHeight / -2,
        1,
        2000
    );
    
    camera.position.set(0, viewportHeight / 2, 500);
    camera.lookAt(0, viewportHeight / 2, 0);
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    console.log('Scene initialized');
    animate();
}

function positionCamera() {
    const spacing = MODEL_SIZE * 1.5;
    const rows = Math.ceil(totalModelsToLoad / gridSize);
    totalGridHeight = rows * spacing;
    
    const container = document.getElementById('stl-viewer');
    const viewportHeight = container.clientHeight;
    
    // Position camera to show top of grid - start at top of viewport
    camera.position.set(0, viewportHeight / 2, 500);
    camera.lookAt(0, viewportHeight / 2, 0);
}

function updateCameraScroll() {
    const container = document.getElementById('stl-viewer');
    const viewportHeight = container.clientHeight;
    
    // Move camera down based on scroll offset, starting from top
    camera.position.y = (viewportHeight / 2) - scrollOffset;
    camera.lookAt(0, (viewportHeight / 2) - scrollOffset, 0);
}

function handleScroll(event) {
    event.preventDefault();
    
    const container = document.getElementById('stl-viewer');
    const viewportHeight = container.clientHeight;
    const spacing = MODEL_SIZE * 1.5;
    const rows = Math.ceil(totalModelsToLoad / gridSize);
    const contentHeight = rows * spacing;
    
    // Calculate max scroll (content height - viewport height)
    const maxScroll = Math.max(0, contentHeight - viewportHeight);
    
    // Update scroll offset
    scrollOffset += event.deltaY * 0.5;
    scrollOffset = Math.max(0, Math.min(scrollOffset, maxScroll));
    
    updateCameraScroll();
}

function handleMove(event) {
    try {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        hoverTooltip.style.left = (event.clientX + 10) + 'px';
        hoverTooltip.style.top = (event.clientY + 10) + 'px';

        isHoverUpdatePending = true;
    } catch (error) {
        console.error(`Error in handleMove: ${error}`);
    }
}

function updateHover() {
    if (isZoomedIn) {
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
                zoomIn(intersectedObject);
            }
        }
    } catch (error) {
        console.error(`Error in handleDoubleClick: ${error}`);
    }
}

function zoomIn(model) {
    previousCameraState.position.copy(camera.position);

    isZoomedIn = true;
    zoomedModel = model;
    hoverTooltip.style.display = 'none';

    showBlogPost(model, 2000);

    const boundingSphere = new THREE.Sphere();
    model.geometry.computeBoundingSphere();
    boundingSphere.copy(model.geometry.boundingSphere);
    boundingSphere.applyMatrix4(model.matrixWorld);

    const direction = camera.position.clone().sub(model.position).normalize();
    const distance = boundingSphere.radius * 2.5;
    const newCameraPosition = model.position.clone().add(direction.multiplyScalar(distance));

    fadeOutObjects = loadedModels.filter(obj => obj !== model);
    fadeInObjects = [model];

    fadeObjects(fadeOutObjects, 1, 0);
    fadeObjects(sphereWireframes, .1, 0);

    animateCamera(newCameraPosition, model.position, 2000, () => {});
}

function zoomOut() {
    fadeInObjects = loadedModels.filter(obj => obj !== zoomedModel);
    isZoomedIn = false;
    zoomedModel = null;

    hideBlogPost();

    fadeObjects(fadeInObjects, 0, 1);
    fadeObjects(sphereWireframes, 0, .1);

    animateCamera(previousCameraState.position, new THREE.Vector3(0, 0, 0), 2000, () => {});
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

    if (isNarrowScreen) {
        targetWidth = window.innerWidth;
        targetHeight = isBlogPostVisible ? window.innerHeight - parseFloat(blogPostOverlayStyleHeight) : window.innerHeight;
    } else {
        targetWidth = isBlogPostVisible ? window.innerWidth - parseFloat(blogPostOverlayStyleWidth) : window.innerWidth;
        targetHeight = window.innerHeight;
    }

    const startWidth = renderer.domElement.width;
    const startHeight = renderer.domElement.height;
    const startPosition = camera.position.clone();
    const startTime = performance.now();

    function updateCamera(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeProgress = easeInOutCubic(progress);

        const currentWidth = startWidth + (targetWidth - startWidth) * easeProgress;
        const currentHeight = startHeight + (targetHeight - startHeight) * easeProgress;
        
        renderer.setSize(currentWidth, currentHeight);
        renderer.render(scene, camera);
        
        camera.aspect = currentWidth / currentHeight;
        camera.updateProjectionMatrix();

        camera.position.lerpVectors(startPosition, targetPosition, easeProgress);
        camera.lookAt(targetLookAt);

        if (zoomedModel) {
            const startQuaternion = zoomedModel.quaternion.clone();
            const targetQuaternion = new THREE.Quaternion();
            targetQuaternion.setFromAxisAngle(new THREE.Vector3(-1, 0, 0), Math.PI / 2);
            zoomedModel.quaternion.slerpQuaternions(startQuaternion, targetQuaternion, easeProgress);
        }

        if (progress < 1) {
            requestAnimationFrame(updateCamera);
        } else {
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
        linewidth: 1,
        opacity: .1,
        transparent: true
    });
    sphereWireframe.visible = !isZoomedIn;

    return { visual: sphereWireframe, physical: null, radius: radius };
}

function queueModelLoad(file, index, count = 1, i = 0) {
    setTimeout(() => {
        modelLoadQueue.push({ file, index, count, i });
        processModelQueue();
    }, index * 1000);
}

function processModelQueue() {
    if (isLoadingModel || modelLoadQueue.length === 0) return;
    
    isLoadingModel = true;
    const { file, index, count, i } = modelLoadQueue.shift();
    
    loadSTLModel(file, index, count, i)
        .then(() => {
            isLoadingModel = false;
            processModelQueue();
        })
        .catch(error => {
            console.error(`Error loading model ${file.name}:`, error);
            isLoadingModel = false;
            processModelQueue();
        });
}

function loadSTLModel(file, index, count = 1, i = 0) {
    return new Promise((resolve, reject) => {
        const startTime = performance.now();
        loader.load(
            file.url,
            (geometry) => {
                const material = new THREE.MeshPhongMaterial({ 
                    color: new THREE.Color(getRandomColor()),
                    specular: 0x111111, 
                    shininess: 30
                });

                const mesh = new THREE.Mesh(geometry, material);
                mesh.userData.fileName = file.name;
                mesh.userData.scadContent = file.scadContent;
                mesh.visible = !isZoomedIn;

                geometry.center();
                geometry.computeBoundingBox();
                const bbox = geometry.boundingBox;
                const size = new THREE.Vector3();
                bbox.getSize(size);
                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = MODEL_SIZE / maxDim;
                mesh.scale.setScalar(scale);
                
                mesh.rotation.x = Math.PI / 4;
                mesh.rotation.y = Math.PI / 4;

                const { visual: sphereWireframe, physical: shape, radius } = createBoundingSphere(geometry, scale);
                sphereWireframe.rotation.copy(mesh.rotation);
                sphereWireframe.material.color.setHex(0x4a5568);
                sphereWireframes.push(sphereWireframe);

                const totalModels = totalModelsToLoad * count;
                gridSize = Math.ceil(Math.sqrt(totalModels));
                const spacing = MODEL_SIZE * 1.5;
                const currentIndex = index * count + i;
                const row = Math.floor(currentIndex / gridSize);
                const col = currentIndex % gridSize;
                
                const gridOffsetX = -(gridSize - 1) * spacing / 2;
                
                const posX = gridOffsetX + col * spacing;
                // Start from top of screen, going downwards (negative Y)
                const posY = -(row * spacing);
                const posZ = 0;
                
                mesh.position.set(posX, posY, posZ);
                sphereWireframe.position.set(posX, posY, posZ);
                sphereWireframe.scale.setScalar(scale);
                scene.add(sphereWireframe);
                
                const boundingSphere = new THREE.Sphere(mesh.position.clone(), radius * scale);
                boundingSpheres.push({ sphere: boundingSphere, model: mesh });

                scene.add(mesh);
                loadedModels.push(mesh);

                loadedModelCount++;
                
                if (loadedModelCount === 1) {
                    positionCamera();
                }
                
                resolve();
            },
            (xhr) => {
                const progress = xhr.loaded / xhr.total * 100;
            },
            (error) => {
                console.error(`Error loading ${file.name}: ${error}`);
                loadedModelCount++;
                reject(error);
            }
        );
    });
}

function animate() {
    requestAnimationFrame(animate);

    updateHover();
    renderer.render(scene, camera);
}

function handleResize() {
    const container = document.getElementById('stl-viewer');
    const viewportWidth = container.clientWidth;
    const viewportHeight = container.clientHeight;
    
    camera.left = viewportWidth / -2;
    camera.right = viewportWidth / 2;
    camera.top = viewportHeight / 2;
    camera.bottom = viewportHeight / -2;
    
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
    
    // Reposition camera for new viewport size
    positionCamera();
}

async function initGallery() {
    try {
        const startTime = performance.now();
        const files = await fetchAllFiles(owner, repo);
        const fetchTime = performance.now() - startTime;
        console.log(`Fetched ${files.length} files in ${fetchTime.toFixed(2)}ms`);

        const container = document.getElementById('stl-viewer');
        hoverTooltip = document.getElementById('hoverTooltip');

        initScene(container);

        totalModelsToLoad = files.length;
        loadedModelCount = 0;

        const count = 1;
        for (let i = 0; i < count; i++) {
            files.forEach((file, index) => {
                queueModelLoad(file, index, count, i);
            });
        }

        renderer.domElement.addEventListener('dblclick', handleDoubleClick, false);
        renderer.domElement.addEventListener('mousemove', handleMove, false);
        renderer.domElement.addEventListener('mouseout', onMouseOut);
        renderer.domElement.addEventListener('wheel', handleScroll, { passive: false });

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