import "./Skills.css"

function Skills() {

    return (
        <div className="skills-container">
            <h2>
                Skills
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            <ul className="circles">

                <div className="circle-item">
                    <img src={require("../../resources/circle.png")} alt="circle" />
                    <p>HTML</p>
                </div>
                <div className="circle-item">
                    <img src={require("../../resources/circle.png")} alt="circle" />
                    <p>CSS</p>
                </div>
                <div className="circle-item">
                    <img src={require("../../resources/circle.png")} alt="circle" />
                    <p>JavaScript</p>
                </div>
                <div className="circle-item">
                    <img src={require("../../resources/circle.png")} alt="circle" />
                    <p>React.js</p>
                </div>
                <div className="circle-item">
                    <img src={require("../../resources/circle.png")} alt="circle" />
                    <p>Python</p>
                </div>
                <div className="circle-item">
                    <img src={require("../../resources/circle.png")} alt="circle" />
                    <p>Java</p>
                </div>

            </ul>
        </div>
    );
}

export default Skills