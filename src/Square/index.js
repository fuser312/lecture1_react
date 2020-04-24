import React from  "react";
import "./style.css"
export default function Square(props) {
    return (
        <button className="square-button" onClick={props.onClick}>
            <div className="button-text">
            {props.value}
            </div>
        </button>
    )
}

// export default Square