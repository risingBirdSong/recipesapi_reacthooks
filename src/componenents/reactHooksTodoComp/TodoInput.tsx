import React from "react";
import { useState } from "react";
import { TodoI, addTodoAction } from "../../Redux";
import { useDispatch } from "react-redux";
import uuid from "uuid";

export const TodoInput: React.FC = (): JSX.Element => {
  let initial: TodoI = {
    complete: false,
    id: "",
    todo: ""
  };

  let [todo, setTodo] = useState(initial);

  const dispatch = useDispatch();
  const addTodo = (todo: TodoI) => dispatch(addTodoAction(todo));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.todo.trim() === "") {
      return;
    } else {
      addTodo({
        todo: todo.todo,
        complete: false,
        id: uuid()
      });
    }
    setTodo(initial);
  };

  return (
    <form onSubmit={e => onSubmit(e)}>
      <div className="form-div">
        <input
          type="text"
          placeholder="todo"
          name="todo"
          onChange={e => {
            setTodo({ ...initial, todo: e.target.value });
          }}
          value={todo.todo}
        />

        <button>click to add</button>
      </div>
    </form>
  );
};
