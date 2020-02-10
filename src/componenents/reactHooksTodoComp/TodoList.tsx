import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoAction, deleteTodoAction, TodoI, stateI } from "../../Redux";

export const TodoList: React.FC = (): JSX.Element => {
  const todos = useSelector((state: stateI) => {
    return state.todos;
  });
  const dispatch = useDispatch();
  const toggleTodo = (id: string) => dispatch(toggleTodoAction(id));
  const deleteTodo = (id: string) => dispatch(deleteTodoAction(id));

  return (
    <ul>
      {todos.map((t, idx) => {
        return (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.complete}
              onChange={toggleTodo.bind(null, t.id)}
            />
            <span className={t.complete ? "complete" : "none"}> {t.todo} </span>
            <button
              className="delete-button"
              onClick={deleteTodo.bind(null, t.id)}
            >
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
};
