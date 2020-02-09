import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Digest,
  HealthLabel,
  Hit,
  Ingredient,
  Recipe,
  RecipeRequest,
  SchemaOrgTag,
  Total,
  Unit
} from "./types/recipe-interface";
import { Recipe_C } from "./componenents/recipe";

const App = () => {
  const APP_ID = "30826602";
  const APP_KEY = "497308982ec69298382d861e3889c8a6";
  const URL = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  //normally this would be stored in env for a real application;

  const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState<Hit[]>([]);

  useEffect(() => {}, []);

  const getRecipes = async () => {
    const response = await fetch(URL);
    const data: RecipeRequest = await response.json();
    console.log("hits", data.hits);
    setRecipes(data.hits);
  };

  const formSubmitter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getRecipes();
    console.log("recipes", recipes);
  };

  return (
    <div className="App">
      <h1>hello react!</h1>

      <form
        onSubmit={e => {
          formSubmitter(e);
        }}
        className="search-form"
      >
        <input type="text" className="search-bar" />
        <button className="search-button">search</button>
      </form>
      <div
        onClick={() => {
          setCounter(counter + 1);
        }}
        style={{ backgroundColor: "beige" }}
      >
        <h1>Recipes</h1>
        <div>
          {recipes.map((r, idx) => (
            <Recipe_C key={idx} {...r} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
