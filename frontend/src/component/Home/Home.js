// import React, { useEffect } from 'react'
// import "./Home.css";
// import *as THREE from 'three';
// import Typography from '@mui/material/Typography'
// import Timelines from '../Timeline/Timelines';
// import CertiCard from "../CertiCard/CertiCard"
// import {
//     SiCplusplus,
//     SiReact,
//     SiJavascript,
//     SiJava,
//     SiMongodb,
//     SiExpress,
//     SiCss3,
//     SiHtml5,
//     SiNodedotjs
// } from "react-icons/si";

// const Home = ({ timelines, certificate, skills }) => {

//     useEffect(() => {
//         let camera
//         let scene
//         let renderer
//         let material
//         let mouseX = 0
//         let mouseY = 0
//         let windowHalfX = window.innerWidth / 2
//         let windowHalfY = window.innerHeight / 2
//         const canvas = document.querySelector('.homecanvas')

//         init()
//         animate()

//         function init() {
//             camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 5, 2000)
//             camera.position.z = 500

//             scene = new THREE.Scene()
//             scene.fog = new THREE.FogExp2(0x0000ff, 0.001)

//             const geometry = new THREE.BufferGeometry()
//             const vertices = []
//             const size = 2000

//             for (let i = 0; i < 20000; i++) {
//                 const x = (Math.random() * size + Math.random() * size) / 2 - size / 2
//                 const y = (Math.random() * size + Math.random() * size) / 2 - size / 2
//                 const z = (Math.random() * size + Math.random() * size) / 2 - size / 2

//                 vertices.push(x, y, z)
//             }

//             geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

//             material = new THREE.PointsMaterial({
//                 size: 1,
//                 color: 0xffffff,
//             })

//             const particles = new THREE.Points(geometry, material)
//             scene.add(particles)

//             renderer = new THREE.WebGLRenderer({ canvas })
//             renderer.setPixelRatio(window.devicePixelRatio)
//             renderer.setSize(window.innerWidth, window.innerHeight)

//             document.body.style.touchAction = 'none'
//             document.body.addEventListener('pointermove', onPointerMove)
//             window.addEventListener('resize', onWindowResize)
//         }

//         function onWindowResize() {
//             windowHalfX = window.innerWidth / 2
//             windowHalfY = window.innerHeight / 2

//             camera.aspect = window.innerWidth / window.innerHeight
//             camera.updateProjectionMatrix()
//             renderer.setSize(window.innerWidth, window.innerHeight)
//         }

//         function onPointerMove(event) {
//             mouseX = event.clientX - windowHalfX
//             mouseY = event.clientY - windowHalfY
//         }

//         function animate() {
//             requestAnimationFrame(animate)
//             render()
//         }

//         function render() {
//             camera.position.x += (mouseX * 2 - camera.position.x) * 0.02
//             camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02
//             camera.lookAt(scene.position)
//             renderer.render(scene, camera)
//             scene.rotation.x += 0.001
//             scene.rotation.y += 0.002
//         }
//         return window.addEventListener("scroll", () => {
//             const skillBox = document.getElementById("homeskillbox");

//             if (window.scrollY > 1500) {
//                 skillBox.style.animationName = "homeskillboxanimationOFF";
//             }
//             else {
//                 skillBox.style.animationName = "homeskillboxanimationON";
//             }
//         })
//     }, []);

//     return (
//         <div className='home'>
//             <canvas className='homecanvas'>
//             </canvas>

//             <div className='homecanvascontainer'>
//                 <Typography variant="h1">
//                     <p>D</p>
//                     <p>E</p>
//                     <p>E</p>
//                     <p>P</p>
//                     <p>A</p>
//                     <p>K</p>
//                 </Typography>
//             </div>

//             <div className='homecanvasbox'>
//                 <Typography variant="h2">DESIGNER</Typography>
//                 <Typography variant="h2">DEVELOPER</Typography>
//                 <Typography variant="h2">PROGRAMMER</Typography>
//             </div>

//             <div className='homecontainer'>
//                 <Typography variant="h3">TIMELINE</Typography>
//                 <Timelines timeline={timelines} />
//             </div>
//             <div className='homeskills'>
//                 <Typography variant='h3'>SKILLS</Typography>

//                 <div className='homecubeskills'>
//                     <div className='homecubeskillsfaces homeskillsfaces1'>
//                         <img src={skills.image1.url} alt='Face1' />
//                     </div>
//                     <div className='homecubeskillsfaces homeskillsfaces2'>
//                         <img src={skills.image2.url} alt='Face2' />
//                     </div>
//                     <div className='homecubeskillsfaces homeskillsfaces3'>
//                         <img src={skills.image3.url} alt='Face3' />
//                     </div>
//                     <div className='homecubeskillsfaces homeskillsfaces4'>
//                         <img src={skills.image4.url} alt='Face4' />
//                     </div>
//                     <div className='homecubeskillsfaces homeskillsfaces5'>
//                         <img src={skills.image5.url} alt='Face5' />
//                     </div>
//                     <div className='homecubeskillsfaces homeskillsfaces6'>
//                         <img src={skills.image6.url} alt='Face6' />
//                     </div>
//                 </div>

//                 <div className='cubeshadow'></div>
//                 <div className='homeskillbox' id='homeskillbox'>
//                     <SiCplusplus />
//                     <SiReact />
//                     <SiJavascript />
//                     <SiJava />
//                     <SiMongodb />
//                     <SiExpress />
//                     <SiCss3 />
//                     <SiHtml5 />
//                     <SiNodedotjs />
//                 </div>
//             </div>
//             <div className='homecertificate'>
//                 <Typography variant='h3'>CERTIFICATES</Typography>

//                 <div className='homecertificateWrapper'>
//                     {certificate.map((item) => (
//                         <CertiCard
//                             image={item.image.url}
//                             title={item.title}
//                             id={item._id}
//                             key={item._id} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home

import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import { Typography } from "@mui/material";
import TimeLine from "../Timeline/Timelines";
import CertiCard from "../CertiCard/CertiCard"

import {
    SiCplusplus,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiThreedotjs,
} from "react-icons/si";

import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";

const Home = ({ timelines, certificate, skills }) => {
    useEffect(() => {
        let camera
        let scene
        let renderer
        let material
        let mouseX = 0
        let mouseY = 0
        let windowHalfX = window.innerWidth / 2
        let windowHalfY = window.innerHeight / 2
        const canvas = document.querySelector('.homeCanvas')

        init()
        animate()

        function init() {
            camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 5, 2000)
            camera.position.z = 500

            scene = new THREE.Scene()
            scene.fog = new THREE.FogExp2(0x0000ff, 0.001)

            const geometry = new THREE.BufferGeometry()
            const vertices = []
            const size = 2000

            for (let i = 0; i < 20000; i++) {
                const x = (Math.random() * size + Math.random() * size) / 2 - size / 2
                const y = (Math.random() * size + Math.random() * size) / 2 - size / 2
                const z = (Math.random() * size + Math.random() * size) / 2 - size / 2

                vertices.push(x, y, z)
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

            material = new THREE.PointsMaterial({
                size: 1,
                color: 0xffffff,
            })

            const particles = new THREE.Points(geometry, material)
            scene.add(particles)

            renderer = new THREE.WebGLRenderer({ canvas })
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(window.innerWidth, window.innerHeight)

            document.body.style.touchAction = 'none'
            document.body.addEventListener('pointermove', onPointerMove)
            window.addEventListener('resize', onWindowResize)
        }

        function onWindowResize() {
            windowHalfX = window.innerWidth / 2
            windowHalfY = window.innerHeight / 2

            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        function onPointerMove(event) {
            mouseX = event.clientX - windowHalfX
            mouseY = event.clientY - windowHalfY
        }

        function animate() {
            requestAnimationFrame(animate)
            render()
        }

        function render() {
            camera.position.x += (mouseX * 2 - camera.position.x) * 0.02
            camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02
            camera.lookAt(scene.position)
            renderer.render(scene, camera)
            scene.rotation.x += 0.001
            scene.rotation.y += 0.002
        }
        return window.addEventListener("scroll", () => {
            const skillBox = document.getElementById("homeskillsBox");

            if (window.scrollY > 1500) {
                skillBox.style.animationName = "homeskillsBoxAnimationOff";
            }
            else {
                skillBox.style.animationName = "homeskillsBoxAnimationOn";
            }
        })
    }, []);

    return (
        <div className="home">
            <canvas className="homeCanvas"></canvas>

            <div className="homeCanvasContainer">
                <Typography variant="h1">
                    <p>D</p>
                    <p>E</p>
                    <p>E</p>
                    <p>P</p>
                    <p>A</p>
                    <p>K</p>
                </Typography>

                <div className="homeCanvasBox">
                    <Typography variant="h2">DESIGNER</Typography>
                    <Typography variant="h2">DEVELOPER</Typography>
                    <Typography variant="h2">PROGRAMMER</Typography>
                </div>

                <Link to="/projects">VIEW WORK</Link>
            </div>

            <div className="homeScrollBtn">
                <MouseOutlined />
            </div>

            <div className="homeContainer">
                <Typography variant="h3">TIMELINE</Typography>
                <TimeLine timeline={timelines} />
            </div>

            <div className="homeSkills">
                <Typography variant="h3">SKILLS</Typography>

                <div className="homeCubeSkills">
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                        <img src={skills.image1.url} alt="Face1" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                        <img src={skills.image2.url} alt="Face2" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                        <img src={skills.image3.url} alt="Face3" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                        <img src={skills.image4.url} alt="Face4" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                        <img src={skills.image5.url} alt="Face5" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                        <img src={skills.image6.url} alt="Face6" />
                    </div>
                </div>

                <div className="cubeShadow"></div>

                <div className="homeskillsBox" id="homeskillsBox">
                    <SiCplusplus />
                    <SiHtml5 />
                    <SiCss3 />
                    <SiJavascript />
                    <SiMongodb />
                    <SiExpress />
                    <SiReact />
                    <SiNodedotjs />
                    <SiThreedotjs />
                </div>
            </div>

            <div className="homeCertificate">
                <Typography variant="h3">INTERNSHIP/TRAINING</Typography>

                <div className="homeCertificateWrapper">
                    {certificate.map((item) => (
                        <CertiCard
                            image={item.image.url}
                            title={item.title}
                            id={item._id}
                            key={item._id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;