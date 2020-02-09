import React from "react";
import { Hit } from "../types/recipe-interface";

export const Recipe_C = (props: Hit) => {
  console.log("props", props.recipe.label);
  return (
    <div>
      <h1>{props.recipe.label}</h1>
      <p> calories : {props.recipe.calories}</p>
      <p> cautions {props.recipe.cautions}</p>
      <img src={props.recipe.image} alt="" />
      <p> source : {props.recipe.source} </p>
      <ul>
        {props.recipe.ingredients.map(i => {
          return <li>{i.text}</li>;
        })}
      </ul>
    </div>
  );
};
