import * as THREE from 'three';
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
const boxMaterial=new THREE.MeshBasicMaterial({color: 0x00FF00});
const box=new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

const planeGeometry=new THREE.PlaneGeometry(30,30);
const planeMaterial=new THREE.MeshBasicMaterial({color: 0xFFFFFFF, side: THREE.DoubleSide});
const plane= new THREE.Mesh(planeGeometry,planeMaterial);
scene.add(plane);
plane.rotation.x=-0.5*Math.PI;

const gridHelper=new THREE.GridHelper(40);
scene.add(gridHelper);

const sphereGeometry=new THREE.SphereGeometry(5, 40, 40);
const sphereMaterial=new THREE.MeshBasicMaterial({color: 0x0000FF, wireframe: false});
const sphere=new THREE.Mesh(sphereGeometry,sphereMaterial);
scene.add(sphere);
sphere.position.set(-10,10,0);

// animating the box
function animate(time){
    box.rotation.x=time/1000;
    box.rotation.y=time/1000;
    // link the scene with the camera using the render method from renderer
    renderer.render(scene,camera);
}
renderer.setAnimationLoop(animate);
