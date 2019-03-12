import React, {Component} from 'react';
import Row from './Row';
import PropTypes from 'prop-types';

class Board extends Component{
    state = {
        height: 6,
        width: 7,
            //an array of 6 rows of 7 circles.  Filled with null
        circles: Array(6).fill(Array(7).fill(' ')),
        redIsNext: true
    }

    //when clicked, the handle click function will return the circles array.
    //the array will be the same, except the targetted circle will be set to activeColor
    //red is next will be toggled

        //function that will change circle colors
    handleClick = (row, col, circles) => {
        let updatedCircles = this.selectCircle(row, col, circles);
            
        console.log(updatedCircles);
            //sets state
        this.setState(() => ({
            circles: updatedCircles,
            redIsNext: !this.state.redIsNext
        }));
    }

        //helper function to find final circle
    selectCircle = (row, col, circles) => {
            //rows before and after changed circle
        let rowsBefore = circles.slice(0, row);
        let rowsAfter = circles.slice(row + 1);
            //target row
        let targetRow = circles[row];
            //rows before and after col
        let beforeCol = targetRow.slice(0, col);
        let afterCol = targetRow.slice(col + 1)
            //sets active color
        let activeColor = this.state.redIsNext ? 'has-background-danger' : 'has-background-dark';
            //sets final array (the array and spread operators turn the three items into one array inside the array of arrays)
        let final = rowsBefore.concat([[...beforeCol, activeColor, ...afterCol]], rowsAfter);

        /**********************
         * Question
         ********************/
            //QUESTION FOR MR. ERIC:  WHY DOESN'T THIS WORK?  WHY DO I NEED TWO SETS OF BRACES?

        // let notFinal = rowsBefore.concat([...beforeCol, activeColor, ...afterCol], rowsAfter);
        // console.log(notFinal);
            //returns final array
        return final;
    }

        //this function drops a placed chip at the bottom of the board
    gravityAction = () => {

    }


        //function to create rows
    createRows = (height) => {
        let rows = [];
        for(let i =0; i < height; i++){
            rows.push(<Row 
                key = {i}
                rowID = {i}
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