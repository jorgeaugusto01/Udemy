import React from 'react';

import styles from './Burguer.module.css';
import BurgerIngredient from './BurguerIngredient/BurguerIngredient';

const burguer = (props) => {
    
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igkey => {
            return [...Array(props.ingredients[igkey])].map((_, i) => {
                return <BurgerIngredient key={igkey + i} type={igkey}/>
            });
        })
        .reduce((arr, el) => { //reduce só preenche sem elementos vazios
            return arr.concat(el)
        }, []);
        if(transformedIngredients.length === 0)
        {
            transformedIngredients = <p className={styles.ingredients}>Please start adding ingredients!</p>
        }

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burguer;