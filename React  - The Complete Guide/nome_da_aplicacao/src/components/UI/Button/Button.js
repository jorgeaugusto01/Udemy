import React from 'react';


const button = (props) => (
    <button onClick={props.clicked}>
        {props.clicked}</button>
);

export default button;