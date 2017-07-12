import React from 'react';
import './Stars.css';

const Stars = (props) => {

    // Math.random()*9 generates a random number between 0 and 9
    // however, we don't want 0, so we add a 1 to this. We then have to wrap this in a Math.floor() 
    const numberOfStars = 1 + Math.floor(Math.random()*9);

    let starArray = [];

    for(let i=0; i < numberOfStars; i++) {
        // pushes the html to the starArray
        starArray.push(<i key={i} className="fa fa-star"></i>);
    }

    return (
        // renders the starArray that contains html.
        <div className="col-5">
            {starArray}
        </div>
    );   
}

export default Stars;