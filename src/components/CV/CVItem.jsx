import "./CVItem.css"

function CVItem({children}) {

    return(
        <div className="cvItem-container">
            {children}
        </div>
    )
}

export default CVItem