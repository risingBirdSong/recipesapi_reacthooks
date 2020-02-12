import React, { useState } from "react";
export const TestApp = (): JSX.Element => {
  const reducer = (state: number, action: "INC" | "DEC" | "RESET") => {
    console.log(action);
    if (action === "INC") {
      return state + 1;
    } else if (action === "DEC") {
      return state - 1;
    } else if (action === "RESET") {
      return (state = 0);
    }
  };
  //@ts-ignore
  const [count, dispatcher] = React.useReducer(reducer, 0);
  return (
    <React.Fragment>
      <h1>counter</h1>
      {count}
      <button
        onClick={() => {
          dispatcher("INC");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatcher("DEC");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatcher("RESET");
        }}
      >
        reset
      </button>
    </React.Fragment>
  );
};
