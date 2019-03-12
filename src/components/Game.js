import React, {Component} from 'react';
import Board from './Board';
import Header from './Header';

    //Game (states: height, width, squares (an array))
        //Header (no props or states needed)
        //Board (props: height, width) 
            //Row ()
                //Square(squares(index))
                    //Marker (props: squares(index))



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