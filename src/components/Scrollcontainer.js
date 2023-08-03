import "../style/Scrollcontainer.css"

function Scrollcontainer({children}) {

    return (
        <div className="scroll-container">
            {children}
        </div>
    )

}

export default Scrollcontainer