import "../style/FlipCard.css"

function FlipCard(props) {

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={require("../resources/" + props.src)} />
                </div>
                <div className="flip-card-back">
                    <h1>{props.text}</h1>
                </div>
            </div>
        </div>
    )
}

export default FlipCard