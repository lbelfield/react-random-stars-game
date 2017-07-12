import React from 'react';

const Button = (props) => {
    return (
        <div className="col-2">
           <button className="btn" disabled={props.parentSelectedNumbersArray.length === 0}>=</button>
        </div>
    );
}

export default Button;