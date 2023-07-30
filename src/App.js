import './App.css';
import {useTranslation} from "react-i18next";
import NavBar from "./components/NavBar";

function App() {

  const { i18n, t } = useTranslation()

  return (
    <div className="App">

      <NavBar />

        <div className="scroll-container">
            <section className="scroll-page" id="home">1</section>
            <section className="scroll-page" id="about">2</section>
            <section className="scroll-page" id="work">3</section>
            <section className="scroll-page" id="contact">4</section>
        </div>

    </div>
  );
}

export default App;
