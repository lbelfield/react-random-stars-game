import React from 'react';

const Button = (props) => {

    let button;

    // parentAnswerIsCorrectBln is a boolean property on Game.js answerIsCorrect
    // if true, give us green. The parentAcceptAnswerFunction then invokes as we need a way of reseting the game. The Game.js has this function - acceptAnswer() 
    // if false, give us red button. 
    // if default, then we need to make it disabled if no numbers have been selected. We can do this by checking our array on Game.js
    // and need a click event. This will fire off the checkAnswer function that lives on the Game.js. 

    switch(props.parentAnswerIsCorrectBln) {
        case true:
            button = <button className="btn btn-success" onClick={props.parentAcceptAnswerFunction}>
                        <i className="fa fa-check"></i>
                     </button>;
            break;
        case false:
            button = <button className="btn btn-danger">
                        <i className="fa fa-times"></i>
                     </button>;
            break;
        default:
            button = <button className="btn" 
                             disabled={props.parentSelectedNumbersArray.length === 0}
                             onClick={props.parentCheckAnswerFunction}>
                                =
                     </button>;
            break;
    }

    return (
        <div className="col-2">
           {button}
        </div>
    );
}

export default Button;