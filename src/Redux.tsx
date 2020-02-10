import React from "react";
import { createStore, combineReducers, Action } from "redux";
import uuid from "uuid/v4";
import { TodoList } from "./componenents/reactHooksTodoComp/TodoList";
import { stat } from "fs";

export interface TodoI {
  complete: boolean;
  todo: string;
  id: string;
}

export enum ActionTypeEnum {
  addTodo = "addTodo",
  deleteTodo = "deleteTodo",
  toggleTodo = "toggleTodo"
}

export interface AddTodoActionI {
  type: ActionTypeEnum.addTodo;
  payload: TodoI;
}

export interface ToggleTodoActionI {
  type: ActionTypeEnum.toggleTodo;
  payload: string;
}

export interface DeleteTodoActionI {
  type: ActionTypeEnum.deleteTodo;
  payload: string;
}

export type AvailableActions =
  | AddTodoActionI
  | ToggleTodoActionI
  | DeleteTodoActionI;

export interface stateI {
  todos: TodoI[];
  todo: TodoI;
}

let initialTodoA: TodoI = {
  complete: false,
  id: "a",
  todo: "test"
};

// normally we'd get our data from a server but for simple app well use initial state
const initialState: stateI = {
  todo: {
    complete: false,
    id: "",
    todo: ""
  },
  todos: [initialTodoA]
};

const reducer = (state: stateI, action: AvailableActions | null): stateI => {
  if (action == null) {
    return state;
  }
  switch (action.type) {
    case ActionTypeEnum.addTodo:
      console.log("state.todos", state.todos);
      console.log("payload", action.payload);
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case ActionTypeEnum.toggleTodo:
      return {
        ...state,
        todos: state.todos.map(t => {
          if (t.id === action.payload) {
            return {
              ...t,
              complete: !t.complete
            };
          } else return t;
        })
      };

    case ActionTypeEnum.deleteTodo:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id != action.payload)
      };
    default:
      return state;
  }
};

export const addTodoAction = (todo: TodoI): AddTodoActionI => {
  return {
    type: ActionTypeEnum.addTodo,
    payload: todo
  };
};

export const toggleTodoAction = (todoID: string): ToggleTodoActionI => {
  return {
    type: ActionTypeEnum.toggleTodo,
    payload: todoID
  };
};

export const deleteTodoAction = (todoID: string): DeleteTodoActionI => {
  return {
    type: ActionTypeEnum.deleteTodo,
    payload: todoID
  };
};

export const store = createStore(
  //@ts-ignore
  reducer,
  initialState,
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//  //@ts-ignore
//+window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
