import React, { useReducer } from "react";

export const Reducercounter = () => {
  const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
      case "increment": {
        return state + action.payload;
      }
      case "decrement": {
        return state - action.payload;
      }
      default: {
        return state;
      }
    }
  };

  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={() => dispatch({ type: "increment" ,payload:100})}>+</button>
      <button onClick={() => dispatch({ type: "decrement",payload:50 })}>-</button>
    </div>
  );
};
