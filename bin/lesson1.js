// const ObjectThreeJS = THREE;
// console.log(ObjectThreeJS);


//scene - init the scene
const scene = new THREE.Scene()

// object - properties for the object
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({ color:0xf00ff00 })
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

const size = {
    width:800,
    height:600
}

//camera - parameters (fov, size)
const camera = new THREE.PerspectiveCamera(75, size.width / size.height)
camera.position.z = 3
camera.position.x = 2
camera.position.y = 2
scene.add(camera)

// renderer - either in html or in javascript
const canvas = document.querySelector('.webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(size.width, size.height)

renderer.render(scene, camera)