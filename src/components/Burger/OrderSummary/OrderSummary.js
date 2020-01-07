import React from "react";
import Button from "../../UI/Button/Button.js";

// needed to wrap order summary
import Aux from "../../../hoc/Aux.js";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    if (props.ingredients[igKey] > 0) {
      return (
        <li key={igKey}>
          <span style={{ testTransform: "capitaize" }}>{igKey}</span>:{" "}
          {props.ingredients[igKey]}
        </li>
      );
    }
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchasedCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
