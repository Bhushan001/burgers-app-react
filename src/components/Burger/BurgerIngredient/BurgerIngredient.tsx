import * as React from "react";
import * as classes from "./BurgerIngredient.css";

export interface IBurgerIngredientProps {
  type?: string;
}

export class BurgerIngredient extends React.Component<IBurgerIngredientProps, any> {
  public ingredient: any;
  constructor(props: IBurgerIngredientProps) {
    super(props);
    this.ingredient = null;
  }
  public render() {
    switch (this.props.type) {
      case "bread-bottom":
        this.ingredient = <div className={classes.BreadBottom} />;
        break;
      case "bread-top":
        this.ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;
      case "meat":
        this.ingredient = <div className={classes.Meat} />;
        break;
      case "cheese":
        this.ingredient = <div className={classes.Cheese} />;
        break;
      case "salad":
        this.ingredient = <div className={classes.Salad} />;
        break;
      case "bacon":
        this.ingredient = <div className={classes.Bacon} />;
        break;
      default:
        this.ingredient = null;
    }
    return this.ingredient;
  }
}
