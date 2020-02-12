import React, { Dispatch, ChangeEvent } from "react";
import { createStore, combineReducers } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import { stat } from "fs";

interface AppStateReducers {
  Counterreducer: () => CounterState;
  NameReducer: () => NameState;
}

interface AppState {
  name: string;
  count: number;
}

interface CounterState {
  count: number;
}

enum CounterActionEnum {
  increment = "increment",
  decrement = "decrement"
}

interface CounterActionI {
  type: CounterActionEnum;
}

const Counterreducer = (
  state: CounterState = { count: 0 },
  action: CounterActionI
): CounterState => {
  switch (action.type) {
    case CounterActionEnum.increment:
      return {
        ...state,
        count: state.count + 1
      };
    case CounterActionEnum.decrement:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

enum NameActionEnum {
  changeName = "changeName"
}

interface NameActionI {
  type: NameActionEnum;
  payload: string;
}

interface NameState {
  name: string;
}

const NameReducer = (
  state: NameState = { name: "" },
  action: NameActionI
): NameState => {
  switch (action.type) {
    case NameActionEnum.changeName:
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
};

const RootReducer = combineReducers({
  Counterreducer,
  NameReducer
});
export type RootState = ReturnType<typeof RootReducer>;

const store = createStore(RootReducer /* middle ware would go here*/);

export const UniqueApp: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Counter />
      <Name />
    </Provider>
  );
};

export const Counter = () => {
  const dispatch = useDispatch<Dispatch<CounterActionI>>();
  //todo how to type this with the correct return types?!
  //@ts-ignore
  const { name, count } = useSelector((state: RootState) => {
    console.log(state);
    let returnee = {
      ...state.Counterreducer,
      ...state.NameReducer
    };
    return returnee;
  });

  const incrementCount = () => {
    const inc = dispatch({ type: CounterActionEnum.increment });
  };

  const decrementCount = () => {
    const dec = dispatch({ type: CounterActionEnum.decrement });
  };

  return (
    <div>
      <>
        <h1>counter : {count} </h1>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
        <h1>name : {name}</h1>
      </>
    </div>
  );
};

const Name: React.FC = (): JSX.Element => {
  const dispatch = useDispatch<Dispatch<NameActionI>>();
  const MyonChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: NameActionEnum.changeName, payload: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="input your name"
        onChange={e => {
          MyonChange(e);
        }}
      />
    </div>
  );
};
