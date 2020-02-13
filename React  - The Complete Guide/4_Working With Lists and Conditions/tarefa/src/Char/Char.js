import React from 'react';

const char = (props) => {
    const style = {
        display: 'inlin-block',
        padding: '16 px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    };
    
    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    )

}

export default char;