import React from 'react';
import PropTypes from 'prop-types'

const Circle = (props) => {
        //destructuring
    const {
        color,
        id
    } = props

    return(
        <div className = {`circle ${color}`}>

        </div>
    );
}

Circle.propTypes = {
    color: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default Circle;