import React, {Component} from 'react';

import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from "./Numbers";
//import Row from 'react-bootstrap/lib/Row';

class Game extends Component {

    state = {
        selectedNumbers: []
    };

    // function that adds the clicked number to the state's selectedNumbers array
    selectNumberFunction = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    }

    render() {
        return (

            // parentSelectedNumbersArray for <Answer> and <Numbers>
            // We need to pass the selectedNumbersArray to the Answer.js and Numbers.js
            // we create a property called parentSelectedNumbers.
            // we set this equal to the selectedNumbersArray.
            // On Answer.js and Numbers.js props, parentSelectedNumbers will exist.

            // parentSelectNumberFunction for <Numbers>
            // We need to pass a reference to a function that changes the state of selectedNumbers[] in Numbers.js
            // so we create a function above that does that
            // then we pass the function to the Numbers.js by the name parentSelectNumberFunction
            // note parentSelectNumberFunction is a reference to this function that lives in this Game.js
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer parentSelectedNumbersArray={this.state.selectedNumbers} />
                </div>
                <br />
                <Numbers parentSelectedNumbersArray={this.state.selectedNumbers} parentSelectNumberFunction={this.selectNumberFunction}/>
            </div>
        );
    }
}

export default Game;