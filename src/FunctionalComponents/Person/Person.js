import React from 'react';
import './Person.css';

/**
 * Functional Component / Presentational Component / Dumb Component / Stateless Component
 * The functional component doesn't play with any lifecycle methods of React & doesn't play
 * with component state.
 */
const person = (props) => {
    return (
        <div className="person-btn">
            <p onClick={props.click}>
                Hi {props.name} your age is {props.age}
            </p>
            <input onChange={props.change} value={props.name} />
        </div>
    )
}

export default person;