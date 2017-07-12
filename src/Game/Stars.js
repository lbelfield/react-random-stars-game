import React from 'react';
import './Stars.css';

// using lodash library here...
import range from 'lodash.range';

const Stars = (props) => {

    // Math.random()*9 generates a random number between 0 and 9
    // however, we don't want 0, so we add a 1 to this. We then have to wrap this in a Math.floor() 
    const numberOfStars = 1 + Math.floor(Math.random()*9);

    return (
        // note we could use a loop, but react encourages the declarative school of thought, eg map, filter, reduce. 
        // map accepts a function(n){} and is basically a foreach loop.
        // foreach n, it returns the <i></i> element, with index is the index of the foreach loop (index has to be unique, hence it is the key)
        <div className="col-5">

            {range(numberOfStars).map(index => 
                <i key={index} className="fa fa-star"></i>
            )}

        </div>
    );   
}

export default Stars; 