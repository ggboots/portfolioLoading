import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as dat from 'lil-gui'

// gui tester + resize refreshing

//1: scene 
const canvas = document.querySelector('canvas#webgl')
const scene = new THREE.Scene()

const gui = new dat.GUI()

// const loadingScreen = new THREE.ShaderMaterial();
//2: object | geometry + materials
const gltfLoader = new GLTFLoader()
gltfLoader.load(
    '/crane/scene.gltf',
    (gltf) => 
    {
        gltf.scene.scale.set(0.005, 0.005, 0.005)
        gltf.scene.position.set(0.5, 0, 0.5)
        gltf.scene.rotation.set(0,Math.PI * 0.75,0)
        gui.add(gltf.scene.position, 'x')
        gui.add(gltf.scene.position, 'y')
        gui.add(gltf.scene.position, 'z')
        scene.add(gltf.scene)
    }
)


const material = new THREE.MeshBasicMaterial({color:0x555555})
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(50,50), 
    material
)
floor.rotation.x = - Math.PI * 0.5
floor.position.y = - 3
scene.add(floor)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)


//3: camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
camera.position.z = 5
camera.position.y = 2
camera.position.x = -0.5
camera.rotation.x = 4
scene.add(camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

//4: render
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha:true
})


renderer.setClearAlpha(0)
renderer.setSize(sizes.width, sizes.height)
const renderScene = () => {



    controls.update()
    renderer.render(scene,camera)
    window.requestAnimationFrame(renderScene)
}

renderScene()