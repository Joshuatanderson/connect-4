import React, {Component} from 'react';
import Row from './Row';
import PropTypes from 'prop-types';

class Board extends Component{
    state = {
        height: 6,
        width: 7,
        circles: Array(42).fill(' '),
        redIsNext: true
    }

        //function that will change circle colors
    handleClick = (id, circles) => {
            //array section before changed item
        let circlesBefore = circles.slice(0, id);
        let circlesAfter = circles.slice(id + 1);
        let changed = this.state.redIsNext ? 'has-background-danger' : 'has-background-dark';
        let final = circlesBefore.concat(changed, circlesAfter);
        this.setState((prevState) => ({
            circles: final,
            redIsNext: !this.state.redIsNext
        }));
    }

        //function to create rows
    createRows = (height) => {
        let rows = [];
        for(let i =0; i < height; i++){
            rows.push(<Row 
                key = {i}
                id = {i}
                width = {this.state.width}
                circles = {this.state.circles}
                handleClick = {this.handleClick}
            />)
        }
        return rows;
    }
    
    render(){
            //destructuring
        return(
            <div className = "section">
                <div className = "container">
                    <div className = "board tile is-ancestor">
                            {/*returns array of rows*/}
                        {this.createRows(this.state.height)}
                    </div>
                </div>
            </div>
        );
    }
}

Board.propTypes = {
    
}

export default Board;