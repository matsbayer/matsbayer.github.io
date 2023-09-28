import "./Skills.css"
import Circle from "./Circle";

const data_skills = [
    {name: "HTML", progress: "90"},
    {name: "CSS", progress: "85"},
    {name: "JavaScript", progress: "80"},
    {name: "React.js", progress: "75"},
    {name: "Python", progress: "65"},
    {name: "Java", progress: "60"},
    {name: "Design Patterns", progress: "45"}
]

function Skills() {

    return (
        <div className="skills-container">
            <h2>
                Skills
            </h2>
            <p>
                These are some example values! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            <ul className="circles">

                {
                    data_skills.map((elem) => {
                        return (
                            <Circle name={elem.name} progress={elem.progress}  />
                            )

                    })
                }

            </ul>
        </div>
    );
}

export default Skills