import React, {Component} from 'react';

import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from "./Numbers";
//import Row from 'react-bootstrap/lib/Row';

class Game extends Component {


    render() {
        return (
            // note this is wrapped inside a div to make them a vertical row
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer />
                    <br />
                    <Numbers />
                </div>
            </div>
        );
    }
}

export default Game;