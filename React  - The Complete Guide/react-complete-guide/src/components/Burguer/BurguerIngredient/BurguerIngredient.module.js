import React from 'react';

import styles from './burguerIngredient.css'

const burguerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case('bread-bottom'):
            ingredient  = <div className={styles.BreadBottom}></div>;
            break;
        case('bread-top'):
            ingredient  = ( <div className={styles.BreadBottom}>
                <div className={styles.Seeds1}></div>
                <div className={styles.Seeds2}></div>
            </div>
        );
        break;
        case('meat'):
            ingredient  = <div className={styles.Meat}></div>;
            break;
        case('cheese'):
            ingredient  = <div className={styles.cheese}></div>;
            break;
        case('bacon'):
            ingredient  = <div className={styles.bacon}></div>;
            break;
        case('salad'):
            ingredient  = <div className={styles.salad}></div>;
            break;
        default:
            ingredient = null;

    }

    return ingredient;

};

export default burguerIngredient;