const canvas = document.querySelector('.webgl')
// creating a scene
const scene = new THREE.Scene()

// backgroundToElephantModel
var bgTexture = new THREE.TextureLoader().load('ele.jpg');
scene.background = bgTexture;

// initialising loader
const loader = new THREE.GLTFLoader()
console.log(loader)
loader.load('Elephant3d.glb', function (glb) {
    console.log("success")
    const root = glb.scene
    root.scale.set(2, 2, 2)
    scene.add(root)
}, function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + "% loaded")
}, function (error) {
    console.log("error")
})

// some light for the model
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(2, 2, 5)
light.castShadow = true
scene.add(light)

const pointLight = new THREE.PointLight(0xc4c4c4, 10)
pointLight.position.set(0, 300, 500)
scene.add(pointLight)

// camera work here
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 100)
camera.position.set(0, 1, 2)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas

})

// controls to rotate and zoom the model
const controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.update()
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.gammaOutput = true
renderer.render(scene, camera)

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate()

// panorama code here
const panorama = new PANOLENS.ImagePanorama('Forestpan-2.jpeg');
const containerBody = document.getElementById("containerImage")
const viewer = new PANOLENS.Viewer({
    container: containerBody
});
viewer.add(panorama);


function customInfo(animal, animalName, x, y, z) {
    let infospot = new PANOLENS.Infospot(
        100,
        animal
    );

    infospot.position.set(x, y, z);
    infospot.addHoverText(animalName, 80);
    infospot.addEventListener("click", function () {
        this.focus();
    });
    panorama.add(infospot)
}
// brahmgiri
customInfo("Flyingsq.png", "Malabar Flying Squirrel", 590, 140, -170)
 customInfo("Cobra.png", "King Cobra", 400, 0, 100 )
 customInfo("giantsq.png", "Malabar Giant Squirrel", 560, -40, -100)
 customInfo("LTM.png", "Lion Tailed Macaque", 400, 0, -200)
 customInfo("bonnet.png", "Bonnet Macaque", 580, 0, 10)
 customInfo("langoor.png", "Nilgiri Langoor", 580, 0, 10)
 customInfo("parakeet.png", "Malabar Parakeet", 500, 140, 200)
 customInfo("leopard.png", "Leopard", 550, 0, -200)
 customInfo("dove.png", "Emerald Dove", 580, 150, 10)
 customInfo("bulbul.png", "Black Bulbul", 600, 40, 100)
 customInfo("Trogon.png", "Malabar Trogon", 600, 100, 10)
 customInfo("clawless.png", "Clawless", 600, 0, -100)
customInfo("B.png", null, 580, 0, -100)

// nagarhole
customInfo("whitevulture.png", "White Backed Vulture", -200, 0, 50)
customInfo("wilddog.png", "Asian Wild Dog", -400, 0, 100)
customInfo("antelope.png", "Four-Horned Antelope", -400, 0, -150)
customInfo("leopard.png", "Indian Leopard", -170, 0, 0)
customInfo("birds.png", "250 Species of Bird", -230, 150, 50)
customInfo("dung-beetle.png", "Dung Beetle", -700, 0, -450)
customInfo("hornbill.png", "Great Pied Horbill", -290, 70, 0)
customInfo("Flycatcher.png", "Nilgiri FlyCatcher", -240, 100, -150)
customInfo("n.png", null, -230, 0, -50)

// pushpagiri
customInfo("hare.png", "Indian Hare", -50, 0, -250)
customInfo("wildpig.png", "Wild Pig", 100, 0, -150)
customInfo("bulbul2.png", "Grey-Headed Bulbul", 150, 40, -250)
customInfo("bonnet.png", "Bonnet Macaque", -100, 0, 150)
customInfo("bluebird2.png", "Blue Winged Parakeet", -100, 40, -250)
customInfo("P.png", null, 30, 0, -150)

// talak
customInfo("hornbill2.png", "Great Pied Hornbill", -70, 60, 170)
customInfo("eagle.png", "Black Eagle", 70, 80, 170)
customInfo("gaur.png", "Gaur", 70, 0, 80)
customInfo("cobra2.png", "King Cobra", 0, 0, 190)
customInfo("Flyingsq2.png", "Giant Flying Squirrel", 10, 150, 170)
customInfo("T.png", null, 70, 0, 170)

document.getElementById("myAudio").autoplay

// bluebird2
// hornbill2
// bulbul2
// flyingsq2
// cobra2
