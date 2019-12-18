import React from 'react';

import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    // We are taking the state Object and turning it into an array,
    // So we can then figure out the content of the burger,
    // And display it dynamically using Array.map()

    const transformedIngredients = Object.keys(props.ingredients)
    // ingKey = ingredientKey
    .map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map((_, i) => {
            return <BurgerIngredient key={ingKey + i} type={ingKey} />
        });
    });
    return (
        <div className={styles.Burger}>
            {/*
            There will always be bread-bottom and bread-top
            What the burger contains, cheese/meat/salad/bacon, that needs to be rendered dynamically
            we use "transformedIngredients" for that, as explained before it's declaration.
            */}
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;