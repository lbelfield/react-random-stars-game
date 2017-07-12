import React, {Component} from 'react';
import './Numbers.css';

const Numbers = (props) => {
    return (
        <div className="card">
            <span>1</span>
            <span className="selected">2</span>
            <span className="used">3</span>
        </div>
    );
}

export default Numbers;