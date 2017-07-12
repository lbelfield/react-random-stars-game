import React from 'react';
import './Numbers.css';

// using lodash library here...
import range from 'lodash.range';

const Numbers = (props) => {

    return (
        // note we could use another loop, but react encourages the declarative school of thought, eg map, filter, reduce. 
        // map accepts a function(numberValue, index){}.
        // the function returns the <span></span> element with numberValue being the arrayOfNumbers[i] value.
        // index is the index of the foreach loop. This has to be unique, hence it is the key
        <div className="card">
            <div> 
                {Numbers.arrayOfNumbers.map((numberValue, index) => 
                    <span key={index}>{numberValue}</span>
                )}
            </div>
        </div>
    );
}

// use lodash range so not hardcoding 1 - 9, eg const arrayOfNumbers = [1,2,3,4,5,6,7,8]
// note this is outside the function, because no point in newing up the same array every time
Numbers.arrayOfNumbers = range(1,10);

export default Numbers;