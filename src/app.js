import * as THREE from 'three'

//1: scene 
//2: object
//3: camera
//4: render

const scene = new THREE.Scene()

const loadingScreen = new THREE.ShaderMaterial();

//geometry
//material 

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)


const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('.webgl'),
})

const renderScene = () => {
    renderer.render(scene,camera)
    window.requestAnimationFrame(renderScene)
}