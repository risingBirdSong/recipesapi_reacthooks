import React from "react";

export interface WeatherEmojisI {
  thunderstorm: string;
  rain: string;
  drizzle: string;
  clouds: string;
  snow: string;
  fog: string;
  clear: string;
  none: string;
}

export const WeatherEmojis: { [k in conditioTypes]: string } = {
  thunderstorm: "🌩️",
  rain: "🌧️",
  drizzle: "🌧️",
  clouds: "🌧️",
  snow: "❄️️",
  fog: "🌫️",
  clear: "☀️",
  none: ""
};

type conditioTypes = keyof WeatherEmojisI;
