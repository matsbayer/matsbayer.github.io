import './App.css';
import {useTranslation} from "react-i18next";
import Home from "./components/home/Home";
import CV from "./components/CV/CV"
import Skills from "./components/skills/Skills";
import {vh, vw} from "style-value-types";
import NavBar from "./components/navigation/NavBar";
import {motion} from "framer-motion";

function App() {

    return (
        <div className="App">
            <NavBar />
                <section id="home">
                    <Home />
                </section>

                <section id="skills" className="flexbox">
                    <Skills />
                </section>

                <section id="experience">
                    {/*<Projects />*/}
                </section>

        </div>
    );
}

export default App;
