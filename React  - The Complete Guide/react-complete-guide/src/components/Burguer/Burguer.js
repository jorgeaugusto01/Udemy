import React from 'react';

import styles from './Burguer.module.css';
import BurgerIngredient from './BurguerIngredient/BurguerIngredient';

const burguer = (props) => {
    
    const transformedIngredients = Object.keys(props.ingredients).map(igkey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            });
        });

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burguer;