import React from  "react";
import "./style.css"
class Square extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value : null,
        }
    }
    render() {
        return(
            <button className="square-button" onClick={() =>
            this.props.clicked()
            }>
                <div className="button-text">
                    {this.props.value}
                </div>
            </button>
        );
    }
}

export default Square