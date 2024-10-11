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
    console.log(`Starting to load model: ${file.name}`);
    loader.load(
        file.url,
        (geometry) => {
            console.log(`Model loaded successfully: ${file.name}`);
            const material = new THREE.MeshPhongMaterial({ 
                color: new THREE.Color(getRandomColor()),
                specular: 0x111111, 
                shininess: 30
            });
            console.log(`geometry.attributes.position.count: ${geometry.attributes.position.count}`);

            for (let i = 0; i < count; i++) {
                const mesh = new THREE.Mesh(geometry, material);
                mesh.userData.fileName = `${file.name} (${i+1})`;

                geometry.center();
                geometry.computeBoundingBox();
                const box = new THREE.Box3().setFromObject(mesh);
                const size = box.getSize(new THREE.Vector3());

                const tallestDimension = Math.max(size.x, size.y, size.z);

                mesh.rotation.x = -Math.PI / 2;

                const { visual: sphereWireframe, physical: shape, radius } = createBoundingSphere(geometry, 1);
                sphereWireframe.position.copy(mesh.position);
                sphereWireframe.rotation.copy(mesh.rotation);
                sphereWireframe.material.color.setHex(0x4a5568);
                scene.add(sphereWireframe);
                sphereWireframes.push(sphereWireframe);

                const spawnHeight = 500 + (index * count + i) * 10; // Increased height
                const offsetRange = 20; // Range for random offset
                const offsetX = (Math.random() - 0.5) * offsetRange * count;
                const offsetZ = (Math.random() - 0.5) * offsetRange * count;
                
                const body = new CANNON.Body({
                    mass: 1,
                    shape: shape,
                    position: new CANNON.Vec3(offsetX, spawnHeight, offsetZ),
                    linearDamping: 0.5, // Reduced from 0.9 to allow more movement
                    angularDamping: 0.5, // Added to allow more rotation
                });

                // Add initial velocity for more movement
                const initialVelocity = new CANNON.Vec3(
                    (Math.random() - 0.5) * 10,
                    0,
                    (Math.random() - 0.5) * 10
                );
                body.velocity.copy(initialVelocity);

                //body.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
                console.log(`${body.quaternion}`)
                world.addBody(body);
                sphereWireframe.userData.physicsBody = body;

                mesh.userData.physicsBody = body;
                console.log(`Physics body set for model: ${file.name}`, mesh.userData);

                scene.add(mesh);
                loadedModels.push(mesh);

                console.log(`Model added to scene: ${file.name}`);
                console.log(`Total models in scene: ${loadedModels.length}`);

                loadedModelCount++;
            }
        },
        (xhr) => {
            console.log(`${file.name} ${(xhr.loaded / xhr.total * 100)}% loaded`);
        },
        (error) => {
            console.error(`Error loading ${file.name}:`, error);
            loadedModelCount++;
        }
    );
}

function createBoundingSphere(geometry, scale) {
    geometry.computeBoundingSphere();
    const sphere = geometry.boundingSphere;
    const radius = sphere.radius * scale;
    console.log(`sphere radius ${radius}`);
    const sphereGeometry = new THREE.SphereGeometry(radius, 16, 16);
    const wireframe = new THREE.WireframeGeometry(sphereGeometry);
    const sphereWireframe = new THREE.LineSegments(wireframe);
    sphereWireframe.material = new THREE.LineBasicMaterial({
        color: 0x4a5568,
        linewidth: 1,  // Set to 1 for thinnest possible line
        opacity: 1,
        transparent: true
    });

    const cannonShape = new CANNON.Sphere(radius);

    return { visual: sphereWireframe, physical: cannonShape, radius: radius };
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
