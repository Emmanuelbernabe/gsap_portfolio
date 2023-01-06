import './styles/style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { PointLight, StereoCamera, Vector3 } from 'three'
import { RectAreaLight} from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// cursor
const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = - (event.clientY / sizes.height - 1.2)
})

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Models

const gltfLoader = new GLTFLoader()

gltfLoader.load(
    '/dist/glTF/Computers.glb',
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

gui.add(pointLight.position, 'x').min(-5).max(5).step(0.01)
gui.add(pointLight.position, 'y').min(-5).max(5).step(0.01)
gui.add(pointLight.position, 'z').min(-5).max(5).step(0.01)
gui.add(pointLight, 'intensity').min(0).max(50).step(0.01)


const rectAreaLightTop = new THREE.RectAreaLight(0x00ff00, 20, 2, 1)
rectAreaLightTop.position.set(0.944, 5, -3.973)
rectAreaLightTop.rotation.set(3.1, 0.084, 0)
scene.add(rectAreaLightTop)


gui.add(rectAreaLightTop.position, 'x').min(-5).max(5).step(0.001)
gui.add(rectAreaLightTop.position, 'y').min(-5).max(5).step(0.001)
gui.add(rectAreaLightTop.position, 'z').min(-5).max(5).step(0.001)
gui.add(rectAreaLightTop.rotation, 'x').min(-5).max(5).step(0.001)
gui.add(rectAreaLightTop.rotation, 'y').min(-5).max(5).step(0.001)
gui.add(rectAreaLightTop.rotation, 'z').min(-5).max(5).step(0.001)

gui.add(ambientLight, 'intensity').min(0).max(1).step(0.01)


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
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 2, 5);
camera.lookAt(new THREE.Vector3());

const tl = gsap.timeline();
window.addEventListener('load', function() {
    tl.to(camera.position, {
        z: 14,
        duration: 1.5,
        onUpdate: function() {
            camera.lookAt(new THREE.Vector3());
        }
    })

    .to(camera.position, {
        y: 10, 
        duration: 1.5,
        onUpdate: function() {
            camera.lookAt(0, 0, 0);
        }
    })

    .to(camera.position, {
        x: 6,
        y: 5, 
        z: 3,
        duration: 1.5,
        onUpdate: function() {
            camera.lookAt(0, 0, 0);
        }
    })
})


scene.add(camera)


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

// shadows

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
directionalLight.castShadow = true
pointLight.castShadow = true
gltfLoader.castShadow = true

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Update controls
   

    // Update camera
    camera.position.x = Math.sin(cursor.x * Math.PI * 0.3) * 15
    camera.position.z = Math.cos(cursor.x * Math.PI * 0.1) * 15
    camera.position.y = cursor.y * 10
    camera.lookAt(new THREE.Vector3())

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()