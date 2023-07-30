import LangSwitcher from "./LangSwitcher";
import "../style/NavBar.css"

function NavBar() {


    return (
        <nav className="navbar">
            <div className="link-container">
                <a href="#home" >Home</a>
                <a href="#about" >About</a>
                <a href="#work" >Work</a>
                <a href="#contact" >Contact</a>
                <LangSwitcher />
            </div>
        </nav>
    )
};

export default NavBar;