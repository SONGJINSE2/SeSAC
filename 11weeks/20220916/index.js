import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#canvas"),
});

let camera = new THREE.PerspectiveCamera(30, 1);

let loader = new GLTFLoader();
loader.load("Planet/scene.gltf", function (gltf) {
  scene.add(gltf.scene);
  renderer.render(scene, camera);
});

export default function SmallPlanet() {
  return (
    <div className="App">
      <canvas id="smallPlanetCanvas"></canvas>
    </div>
  );
}
