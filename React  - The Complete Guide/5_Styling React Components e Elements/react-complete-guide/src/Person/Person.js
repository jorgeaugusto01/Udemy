import React from 'react';

import classes from './Person.css';

const person = (props) => {
    const style ={
        '@media (minWidth: 500px)': {
            width: '400px'
        }
    }
    
    return (
        <div className={classes.Person} style={style}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        )
};

export default person;