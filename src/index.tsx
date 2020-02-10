//@ts-ignore
import React from "react";
//@ts-ignore
import ReactDOM from "react-dom";
import "./index.css";
import RecipeApp from "./componenents/RecipeApp";
import * as serviceWorker from "./serviceWorker";
import { WeatherApp } from "../src/componenents/WeatherApp";
import { TodoAppHooksReact } from "./App";
ReactDOM.render(<TodoAppHooksReact />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
