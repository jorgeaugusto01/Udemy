import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http request...
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        toggleBtnRef.current.click();

        return () => {
            
            console.log('[Cockpit.js] cleanup work in useEffetc!!');
        };
    }, []); //se passar um array em branco essa função será chamada para o ciclod e update somente para o componente this

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffetc!!');
        } 
    });//se não passar um array em branco essa função será chamada para o ciclod e update de todos os componentes

    //const assignedClasses = [];
    //let btnClass = ''
    
    /*if(props.showPersons) {
        btnClass = classes.Red;
    }

    if( props.personsLenght <=2){
        assignedClasses.push(classes.red);
    }

    if( props.personsLenght <=1){
        assignedClasses.push(classes.red);
    }*/

    const styleButton = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'}

    return (
        <div /*className={classes.Cockpit}*/>
            <h1>{props.title}</h1>
            <p /*className={assignedClasses.join(' ')}*/>This is really working!</p>
            <button 
                ref={toggleBtnRef}
                // className={btnClass}
                style={styleButton}
                onClick={props.clicked}>Toggle Person</button>
                <AuthContext.Consumer>
                    {context => <button onClick={context.login}>Login in</button>}
                </AuthContext.Consumer>
        </div>
    );

};

export default React.memo(cockpit);


