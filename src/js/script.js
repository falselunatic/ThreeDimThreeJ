import * as THREE from 'three';
import * as dat from 'dat.gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(
    40, window.innerWidth/window.innerHeight, 0.1, 1000
);
const orbit=new OrbitControls(camera, renderer.domElement);
const axesHelper=new THREE.AxesHelper(15);
scene.add(axesHelper);
// to see the helper we need to move the camera
// camera.position.z=5;
// camera.position.y=2;
camera.position.set(50,30,30);
orbit.update();

const boxGeometry=new THREE.BoxGeometry();
const boxMaterial=new THREE.MeshStandardMaterial({color: 0x00FF00});
const box=new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

const planeGeometry=new THREE.PlaneGeometry(30,30);
const planeMaterial=new THREE.MeshStandardMaterial({color: 0xD3D3D3, side: THREE.DoubleSide});
const plane= new THREE.Mesh(planeGeometry,planeMaterial);
scene.add(plane);
plane.rotation.x=-0.5*Math.PI;

const gridHelper=new THREE.GridHelper(40);
scene.add(gridHelper);

const sphereGeometry=new THREE.SphereGeometry(5, 40, 40);
const sphereMaterial=new THREE.MeshStandardMaterial({color: 0x0000FF, wireframe: false});
const sphere=new THREE.Mesh(sphereGeometry,sphereMaterial);
scene.add(sphere);
sphere.position.set(-10,10,0);

const verticalSphereGeometry=new THREE.SphereGeometry(3, 40, 40);
const verticalSphereMaterial=new THREE.MeshStandardMaterial({color: 0xFF0000, wireframe: false});
const verticalSphere=new THREE.Mesh(verticalSphereGeometry, verticalSphereMaterial);
scene.add(verticalSphere);
verticalSphere.position.set(0, 10, 0);

// ambient light
const ambientLight=new THREE.AmbientLight(0x333333);
scene.add(ambientLight);
// directional light
const directionalLight=new THREE.DirectionalLight(0xFFFFFF, 1.5);
scene.add(directionalLight);
const dLightHelper=new THREE.DirectionalLightHelper(directionalLight);
scene.add(dLightHelper);
const gui=new dat.GUI();
const options={
    sphereColor: '#ffea00',
    wireframe: false,
    speed: 0.04
};
gui.addColor(options, 'sphereColor').onChange(function(e){
    sphere.material.color.set(e);
    verticalSphere.material.color.set(e);
});
gui.add(options,'wireframe').onChange(function(e){
    sphere.material.wireframe=e;
    verticalSphere.material.wireframe=e;
});
gui.add(options,'speed',0,0.2);

let step=0;

// animating the box
function animate(time){
    const radius = 20;
    step += options.speed;
    sphere.position.x = radius * Math.sin(step); 
    sphere.position.z = radius * Math.cos(step); 
    sphere.position.y = 10; 
    const verticalRadius = 15;
    verticalSphere.position.y = verticalRadius * Math.sin(step); 
    verticalSphere.position.z = verticalRadius * Math.cos(step); 
    verticalSphere.position.x = 0; 
    // Moving the camera around the scene
    camera.position.x = 50 * Math.sin(time / 2000);
    camera.position.z = 50 * Math.cos(time / 2000);
    camera.lookAt(scene.position);
    // link the scene with the camera using the render method from renderer
    renderer.render(scene,camera);
}
renderer.setAnimationLoop(animate);
