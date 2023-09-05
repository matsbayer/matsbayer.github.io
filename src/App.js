import './App.css';
import {useTranslation} from "react-i18next";
import NavBar from "./components/NavBar";
import Scrollcontainer from "./components/Scrollcontainer";
import Info from "./components/Info";
import Contact from "./components/Contact";
import {Canvas} from "@react-three/fiber";
import {CameraControls, Center, PerspectiveCamera, PresentationControls} from "@react-three/drei";
import {Suspense} from 'react'

import Experience from "./components/Experience";
import Monitor from "./components/Monitor";



function App() {

    const {i18n, t} = useTranslation()

    return (
        <div className="App">
            <NavBar/>
            <Scrollcontainer>
                <section className="scroll-page" id="home" >
                    <Info />
                </section>

                <section className="scroll-page pagefullcanvas" id="about" >
                    <Canvas camera={{fov: 75, position: [2, 1, 5]}} className="canvas" style={{width: 500, backgroundColor: "#282828", height: 500}}>
                        <Suspense fallback={null}>
                        <ambientLight intensity={0.1} />
                        <directionalLight color="white" position={[0, 0, 6]} />
                            <CameraControls enabled={true} />
                                <Monitor />

                        </Suspense>
                    </Canvas>
                </section>

                <section className="pagefull" id="work" >

                    <div>
                        <Experience />
                    </div>

                </section>

                <section className="pagefuller" id="contact" >
                    <Contact />
                </section>

            </Scrollcontainer>

        </div>
    );
}

export default App;
