import React, {Component} from "react";
import Square from "../Square";
import "./style.css"

export default class Grid extends Component {
    renderSquare(i){
        return <Square value={this.props.squares[i]}
                       onClick={()=>this.props.onClick(i)}
        />
    }
    render() {
        return (
            <div className="grid">
                <div className="grid-style">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="grid-style">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="grid-style">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>
        )
    }
}
