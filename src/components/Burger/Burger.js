import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  //Convert json object to array
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      console.log([...Array(props.ingredients[igKey])]);
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        console.log("key = " + igKey + i);
        console.log("type = " + igKey);
        return (
          <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>
        );
      });
    })
    // or flatten array
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  console.log("length = " + transformedIngredients.length);
  if (transformedIngredients.length === 0) {
    console.log("length == 0");
    transformedIngredients = <p>Please Start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
