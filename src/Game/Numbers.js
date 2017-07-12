import React from 'react';
import './Numbers.css';

// using lodash library here...
import range from 'lodash.range';

const Numbers = (props) => {

    // parentSelectedNumbersArray is an Array living on the Game.js state
    // this is now accessible via props.
    // if the value passed in is a value on the parentSelectedNumbersArray, return selected
    // Look at the css for Numbers.css. It says if className=selected, apply a different style
    const numberClassName = (numberValue) => {
        if(props.parentUsedNumbersArray.indexOf(numberValue) >= 0) {
            return 'used';
        }
        if(props.parentSelectedNumbersArray.indexOf(numberValue) >= 0) {
            return 'selected';
        }
    }

    return (
        // note we could use another loop, but react encourages the declarative school of thought, eg map, filter, reduce. 
        // map accepts a function(numberValue, index){}.
        // the function returns the <span></span> element with numberValue being the arrayOfNumbers[i] value.
        // index is the index of the foreach loop. This has to be unique, hence it is the key
        
        // className={numberClassName(numberValue) calls the function numberClassName above, passing in the value
        // Look at the css for Numbers.css. It says if className=selected, apply a different style

        //parentSelectNumberFunction is a function living on Game.js
        // when a user clicks on one of these numbers, it will invoke this parentSelectNumberFunction
        // as this lives on Game.js, it is just a reference to this function
        <div className="card">
            <div> 
                {Numbers.arrayOfNumbers.map((numberValue, index) => 
                    <span 
                        key={index} 
                        className={numberClassName(numberValue)}
                        onClick={() => props.parentSelectNumberFunction(numberValue)}>
                            {numberValue}
                    </span>
                )}
            </div>
        </div>
    );
}

// use lodash range so not hardcoding 1 - 9, eg const arrayOfNumbers = [1,2,3,4,5,6,7,8]
// note this is outside the function, because no point in newing up the same array every time
Numbers.arrayOfNumbers = range(1,10);

export default Numbers;