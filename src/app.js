import * as THREE from 'three'
// import {OrbitControls} from 'THR'


//1: scene 
const canvas = document.querySelector('canvas#webgl')
const scene = new THREE.Scene()

// const loadingScreen = new THREE.ShaderMaterial();
//2: object | geometry + materials
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
mesh.rotation.x = 1
mesh.rotation.z = 1
// mesh.rotation.y = 0.5 * Math.PI;
mesh.position.y = 0.25

scene.add(mesh)



const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

//3: camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
// camera.position.x = 2
// camera.position.y = 2 
camera.position.z = 2
scene.add(camera)


//4: render
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
const renderScene = () => {
    renderer.render(scene,camera)
    window.requestAnimationFrame(renderScene)
}

renderScene()