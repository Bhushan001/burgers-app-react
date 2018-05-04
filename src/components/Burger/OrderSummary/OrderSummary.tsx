import * as React from "react";
import Aux from "../../../hoc/Aux";

interface IOrderSummaryProps {
  ingredients: any;
}

const OrderSummary: React.SFC<IOrderSummaryProps> = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A Delicious Burger with the following ingredients : </p>
      <ul>
          {ingredientSummary}
      </ul>
      <p>Continue to Checkout</p>
    </Aux>
  );
};

export default OrderSummary;
