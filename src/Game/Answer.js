import React from 'react';
import './Numbers.css';

const Answer = (props) => {
    return (

        // map is like a foreach loop. 
        // parentSelectedNumbersArray is an Array living on the Game.js state
        // this is now accessible via props.
        // the map will get put each value in its array into the numberValue.
        // i is an index. As this is unique, we use it as a key.
        <div className="col-5">
            {props.parentSelectedNumbersArray.map((numberValue, i) => 
                <span key={i}>{numberValue}</span>
                )}
        </div>
    );
}

export default Answer;