import * as React from "react";
import * as classes from "./Burger.css";
import {BurgerIngredient} from "./BurgerIngredient/BurgerIngredient";

interface IBurgerProps {
  ingredients: any;
}

const Burger: React.SFC<IBurgerProps> = props => {
  let ingredients: any = [];
  for (const ingKey of Object.keys(props.ingredients)) {
    for (let i = 0; i < props.ingredients[ingKey]; i++) {
      ingredients.push(<BurgerIngredient key={ingKey + i} type={ingKey} />);
    }
  }
  if (ingredients.length === 0) {
    ingredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
