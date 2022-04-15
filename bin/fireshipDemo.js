const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerWidth, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.webgl'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30);

renderer.render(scene,camera)

const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus)

// const controls = new OrbitControls(camera, renderer.domElement);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);


function addStar(){
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff})
    const star = new THREE.Mesh( geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100) );

    star.position.set(x,y,z);
    scene.add(star)
}

Array(200).fill().forEach(addStar);


function animate(){
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    // controls.update();

    renderer.render(scene,camera);
    
}

animate();