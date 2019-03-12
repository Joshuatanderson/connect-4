import React, {Component} from 'react';
import Square from './Square'
import PropTypes from 'prop-types'

class Row extends Component{

        //swap out width in key to rowID
    createSquares = (width, rowID, circles, handleClick) => {
        let squares = [];
        for(let i = 0; i < width; i++){
            squares.push(<Square 
                    //this should give a unique key to each square
                key = {rowID * width + i}
                id = {rowID * width + i}
                circles = {circles}
                handleClick = {handleClick}
            />);
        }
        return squares;
    }


    render(){
        const {
            width,
            id,
            circles,
            handleClick
        } = this.props
        return(
            <div className = "tile is-parent row">
                    {/* creates squares */}
                {this.createSquares(width, id, circles, handleClick)}
            </div>
            
        );
    }
}

Row.propTypes = {
    width: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    circles: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Row;