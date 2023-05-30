import './styles/style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { PointLight, StereoCamera, Vector3 } from 'three'
import { RectAreaLight} from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function webgl() {

 // Time

 const today = new Date().getHours();
 // const today = 22
 
 const time = {
     timeZone:"Europe/Madrid",
     hour12 : false,
     hour:  "2-digit",
     minute: "2-digit",
 }
 
 document.querySelector('.hero__time').textContent = new Date().toLocaleTimeString('en-GB', time);
 document.querySelector('.hero__time-mob').textContent = new Date().toLocaleTimeString('en-GB', time);
/**
 * Loaders
 */

const button = document.querySelector(".button");
const tl = gsap.timeline();
button.addEventListener('click', function() {
tl.to(camera.position, {
    z: 8,
    y: 8,
    duration: 4,
    delay: 7
})
})

/**
 * Cursor
 */

const cursor = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (event) => 
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = (event.clientY / sizes.height - 0.5)

})

/**
 * Debug
 */

// const gui = new dat.GUI()

/**
 * Canvas
 */

const canvas = document.querySelector('canvas.webgl')

/**
 * Scene
 */

const scene = new THREE.Scene()

/**
 * Models
 */

const gltfLoader = new GLTFLoader()

gltfLoader.load(
    'https://uploads-ssl.webflow.com/63ab01e1aec5f31e3b885780/63c55bf04440ed5e9c201f39_Computers.glb.txt',
    (gltf) =>
    scene.add(gltf.scene)
   )

/**
 * Lights
 */

const ambientLight = new THREE.AmbientLight(0x00ff00, 0.6)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0x0000ff, 1)
scene.add(directionalLight)

const pointLight = new THREE.PointLight(0x00ff00, 10, 100, 2)
pointLight.position.set(0.08, 2.3, -1.15)
scene.add(pointLight)

// gui.add(pointLight.position, 'x').min(-5).max(5).step(0.01)
// gui.add(pointLight.position, 'y').min(-5).max(5).step(0.01)
// gui.add(pointLight.position, 'z').min(-5).max(5).step(0.01)
// gui.add(pointLight, 'intensity').min(0).max(50).step(0.01)


const rectAreaLightTop = new THREE.RectAreaLight(0x00ff00, 20, 2, 1)
rectAreaLightTop.position.set(0.944, 5, -3.973)
rectAreaLightTop.rotation.set(3.1, 0.084, 0)
scene.add(rectAreaLightTop)


// gui.add(rectAreaLightTop.position, 'x').min(-5).max(5).step(0.001)
// gui.add(rectAreaLightTop.position, 'y').min(-5).max(5).step(0.001)
// gui.add(rectAreaLightTop.position, 'z').min(-5).max(5).step(0.001)
// gui.add(rectAreaLightTop.rotation, 'x').min(-5).max(5).step(0.001)
// gui.add(rectAreaLightTop.rotation, 'y').min(-5).max(5).step(0.001)
// gui.add(rectAreaLightTop.rotation, 'z').min(-5).max(5).step(0.001)

// gui.add(ambientLight, 'intensity').min(0).max(1).step(0.01)


/**
 * Sizes
 */

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


/**
 * Camera
 */

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 10000)
camera.position.set(0, 2, 0)

const cameraGroup = new THREE.Group()

cameraGroup.add(camera)
scene.add(cameraGroup)

/**
 * Renderer
 */

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap 
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.physicallyCorrectLights = true
renderer.setClearColor('#000002')


/**
 * Shadows
 */

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
directionalLight.castShadow = true
pointLight.castShadow = true
gltfLoader.castShadow = true

// Particles
// Geometry
const particlesCount = 200
const positions = new Float32Array(particlesCount * 3)

for(let i = 0; i < particlesCount; i++)
{
    positions[i * 3 + 0] = (Math.random() - 0.5) * 30
    positions[i * 3 + 1] =  3 * Math.random() * 5
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
}

const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

// Material 
const particlesMaterial = new THREE.PointsMaterial({
    color: '#00ff00',
    sizeAttenuation: true,
    size: 0.03
})

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)

/**
 * Animate
 */

const clock = new THREE.Clock()

// document.addEventListener('mousemove', onDocumentMouseMove)

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // targetX = mouseX * 0.0001
    // targetY = mouseY * 0.0001

    // cameraGroup.rotation.y += 0.04 * (-targetX - cameraGroup.rotation.y)
    // cameraGroup.rotation.z += 0.04 * (-targetY - cameraGroup.rotation.z)
    
// Update Camera
cameraGroup.position.x = Math.sin(cursor.x * Math.PI * 0.3) * 15
cameraGroup.position.z = Math.cos(cursor.x * Math.PI * 0.1) * 3
cameraGroup.position.y = cursor.y * 5
// camera.lookAt(new THREE.Vector3())

    camera.lookAt(0, 5, 0)
    
    // Update controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick() 


}

export default webgl