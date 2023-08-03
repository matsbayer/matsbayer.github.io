import './App.css';
import {useTranslation} from "react-i18next";
import NavBar from "./components/NavBar";
import Scrollcontainer from "./components/Scrollcontainer";
import {motion} from "framer-motion";
import Card from "./components/Card"
import Info from "./components/Info";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {

    const {i18n, t} = useTranslation()

    return (
        <div className="App">
            <NavBar/>
            <Scrollcontainer>
                <section className="scroll-page" id="home">
                    <Info />
                </section>

                <section className="scroll-page" id="about">
                    <About />
                </section>

                <section
                    initial={{
                        y: 0,
                    }}
                    whileInView={{
                        y: 0,
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 2,
                    }}

                    className="scroll-page" id="work">
                    <Card
                        heading="AI"
                        image="https://img.icons8.com/?size=512&id=61864&format=png"
                        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                         sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                         sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
                    />
                    <Card
                        heading="Development"
                        image="https://img.icons8.com/?size=512&id=2778&format=png"
                        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                         sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                         sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
                    />
                    <Card
                        heading="Creativity"
                        image="https://img.icons8.com/?size=512&id=21908&format=png"
                        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                         sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                         sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
                    />
                </section>

                <section className="scroll-page" id="contact">
                    <Contact />
                </section>

            </Scrollcontainer>

        </div>
    );
}

export default App;
