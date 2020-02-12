//@ts-ignore
import React from "react";
//@ts-ignore
import ReactDOM from "react-dom";
import "./index.css";
import RecipeApp from "./componenents/RecipeApp";
import * as serviceWorker from "./serviceWorker";
import { WeatherApp } from "../src/componenents/WeatherApp";
import { TodoAppHooksReact } from "./componenents/todoapp-reduxhooks";
import { UniqueApp } from "./componenents/counter-reduxhooks";
import { TestApp } from "./componenents/typescriptReactHooksTut";
ReactDOM.render(<TestApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
