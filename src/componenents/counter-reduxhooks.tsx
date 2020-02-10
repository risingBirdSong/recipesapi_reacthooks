import React, { Dispatch } from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import { stat } from "fs";

interface AppState {
  count: number;
}

const initialState: AppState = {
  count: 0
};

enum ActionEnum {
  increment = "increment",
  decrement = "decrement"
}

interface ActionI {
  type: ActionEnum;
}

const reducer = (state: AppState = initialState, action: ActionI): AppState => {
  switch (action.type) {
    case ActionEnum.increment:
      state.count += 1;
      return state;
    case ActionEnum.decrement:
      state.count -= 1;
      return state;
    default:
      return state;
  }
};

const store = createStore(reducer, initialState /* middle ware would go here*/);

export const UniqueApp: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export const Counter = () => {
  const dispatch = useDispatch<Dispatch<ActionI>>();

  const count = useSelector((state: AppState) => {
    return state.count;
  });

  const incrementCount = () => {
    const inc = dispatch({ type: ActionEnum.increment });
  };

  const decrementCount = () => {
    const dec = dispatch({ type: ActionEnum.decrement });
  };

  return (
    <div>
      <>
        <h1>counter : {count} </h1>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </>
    </div>
  );
};
