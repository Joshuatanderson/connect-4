import React from 'react';
import PropTypes from 'prop-types';
import Circle from './Circle';

const Square = (props) => {
    const {
        id,
        circles,
        handleClick
    } = props

    // add circle component, give id and key of id. 
    // pass circles[id] as a prop to circle
    //set className of circle to the id prop
    return(
        <div onClick = {() => props.handleClick(id, circles)} className = "tile is-child box square is-info">
                {/* creates circle component */}
            <Circle 
                id = {id}
                key = {id}
                color = {circles[id]}
            />
        </div>
    );
}

Square.propTypes = {
    id: PropTypes.number.isRequired,
    circles: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Square;