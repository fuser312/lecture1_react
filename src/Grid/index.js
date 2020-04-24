import React from "react";
import Square from "../Square";
import "./style.css"

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares : Array(9).fill( null),
            isNext : true,
            status : "Player X turn"
        }
    }

    handleClick(index){
        let squaresCopy = this.state.squares.slice();
        if(squaresCopy[index] !== null){
            return;
        }

        squaresCopy[index] = this.state.isNext ? "X" : "O";
        this.setState({
            squares : squaresCopy,
            isNext : !this.state.isNext,
            status : !this.state.isNext ? "Player X turn" : "Player O turn",
        })
        this.checkForWin(1);
    }

    checkForWin= (num) => {
        console.log(this.state.squares[0]);
        console.log(this.state.squares);

}

    gridRow(offset){
        return(

            <div className="grid-style">
                <Square value = {this.state.squares[offset + 0]} clicked = {() => this.handleClick(offset+0)}/>
                <Square value = {this.state.squares[offset + 1]} clicked = {() => this.handleClick(offset+1)}/>
                <Square value = {this.state.squares[offset + 2]} clicked = {() => this.handleClick(offset+2)}/>
            </div>

        )
    }
    render() {
        return (
            <div className="grid">
                {this.state.status}
                {this.gridRow(1)}
                {this.gridRow(4)}
                {this.gridRow(7)}

            </div>
        );
    }
}

export default Grid