import "./Circle.css"

function Circle(props) {
    const percent = props.progress
    const name = props.name
    const progress = props.progress * 360 * 0.01

    return(
        <div className="circle-container">
                <div className="circular-progress"
                     style={{background: "conic-gradient(var(--orange)" + progress + "deg, var(--red) 0deg)"}}
                >
                    <p className="progress-value">{percent}%</p>
                </div>
            <p className="circle-text">{props.name}</p>
        </div>
    )
}

export default Circle