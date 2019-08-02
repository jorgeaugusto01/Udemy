import React from 'react';

import styles from './Burguer.css';
import BurgerIngredient from './BurguerIngredient/BurguerIngredient.module';

const burguer = (props) => {
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burguer;