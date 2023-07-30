import "../style/LangSwitcher.css"
import i18n from "i18next";

function LangSwitcher() {

    const changeLang = (event) => {
        if (event.target.checked) {
            i18n.changeLanguage("de");
        } else {
            i18n.changeLanguage("en");
        }
    }

    return (
        <label class="switch">
            <input type="checkbox" onChange={changeLang}/>
            <span class="slider round"></span>
        </label>
    );
}

export default LangSwitcher;