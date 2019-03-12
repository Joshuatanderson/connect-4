import React, {Component} from 'react';
import Board from './Board';
import Header from './Header';

    //to add:
        //lift redIsNext and circles to the game component.
        //create a function that stops you from replacing an existing piece
        //add a function that checks to see if someone won after a piece is placed
        //add a function that triggers a winner effect
        //add a new game button that resets the states to start over
        //active player functional component (should contain player names, and circles that toggle on and off when the active player state changes)
        //

class Game extends Component {
    state = {
        
    }
    render(){
        return(
            <div className = "wrapper">
                <Header />
                <Board 
                    
                />
            </div>
        );
    }
}

export default Game;