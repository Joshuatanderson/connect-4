import React from 'react';
import PropTypes from 'prop-types';
import Circle from './Circle';

const Square = (props) => {
    const {
        circles,
        handleClick,
        col,
        row
    } = props

    let id = row*col;

    // add circle component, give id and key of id. 
    // pass circles[id] as a prop to circle
    //set className of circle to the id prop
    return(
        <div onClick = {() => handleClick(row, col, circles)} className = "tile is-child box square is-info">
                {/* creates circle component */}
            <Circle 
                key = {id}
                color = {circles[row][col]}
            />
        </div>
    );
}

Square.propTypes = {
    col: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    circles: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Square;