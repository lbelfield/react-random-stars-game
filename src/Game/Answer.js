import React from 'react';
import './Numbers.css';

const Answer = (props) => {
    return (

        // map is like a foreach loop. 
        // parentSelectedNumbersArray is an Array living on the Game.js state
        // this is now accessible via props.
        // the map will get put each value in its array into the numberValue.
        // i is an index. As this is unique, we use it as a key.

        // when the user clicks an answer, the unselectedNumberFunction gets invoked, which lives on the Game.js
        // The parentUnselectedNumberFunction is a reference to this unselectedNumberFunction function.
        <div className="col-5">
            {props.parentSelectedNumbersArray.map((numberValue, i) => 
                <span 
                    key={i}
                    onClick={() => props.parentUnselectedNumberFunction(numberValue)} >
                        {numberValue}
                </span>
                )}
        </div>
    );
}

export default Answer;