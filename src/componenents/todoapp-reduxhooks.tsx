import React from "react";
import { TodoInput } from "../componenents/reactHooksTodoComp/TodoInput";
import { TodoList } from "../componenents/reactHooksTodoComp/TodoList";
//@ts-ignore
import { Provider } from "react-redux";
import { store } from "../Redux";

export const TodoAppHooksReact = () => {
  return (
    <Provider store={store}>
      <div className="main">
        <h1>hi from react hooks</h1>
        <TodoInput />
        <TodoList />
      </div>
      //{" "}
    </Provider>
  );
};
