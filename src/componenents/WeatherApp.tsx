import React, { useState } from "react";
import { WeatherRequest } from "../weathertypes/interface";
import { WeatherEmojis } from "../weathertypes/weatherEmoji";
enum appStylingEnum {
  main = "app",
  warm = "app warm"
}

enum searchEnum {
  searchbox = "searchbox",
  searchbar = "searchbar",
  placeholder = "search..."
}

enum locationEnum {
  locationBox = "locationBox",
  location = "location",
  date = "date",
  weatherBox = "weatherBox",
  temp = "temp",
  weather = "weather"
}

export const WeatherApp = () => {
  const apikey = `6a10397cb0947bd46188d2179f789633`;
  const baseurl = `https://api.openweathermap.org/data/2.5/`;

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState<WeatherRequest | null>(null);

  const search = async () => {
    let prepared = `${baseurl}weather?q=${query}&units=imperial&APPID=${apikey}`;
    console.log("url", prepared);
    fetch(prepared)
      .then(d => d.json())
      .then(data => {
        if (data) {
          setWeather(data);
        } else {
          setWeather(null);
        }
        setQuery("");
      });
  };

  let atEmoji = weather?.weather[0]?.main.toLowerCase();

  return (
    <div className={appStylingEnum.main}>
      <div className={searchEnum.searchbox}>
        <input
          onChange={e => {
            setQuery(e.target.value);
          }}
          value={query}
          type="text"
          className={searchEnum.searchbar}
          placeholder={searchEnum.placeholder}
        />
        <button onClick={search}> click for weather</button>
      </div>
      <div className={locationEnum.locationBox}>
        //@ts-ignore
        <h3 className={locationEnum.location}>
          {" "}
          {weather ? `${weather.name} , ${weather.sys.country}` : ""}
        </h3>
        <h3 className={locationEnum.date}> {new Date().toUTCString()} </h3>
        <div className={locationEnum.weatherBox}>
          <h3 className={locationEnum.temp}>temp - {weather?.main?.temp} ℉</h3>
          <h3>test : {weather?.weather[0].main}</h3>
          <h3>
            further test :{/* prettier-ignore */}
            //@ts-ignore
            {WeatherEmojis[atEmoji ? atEmoji : "none"]}
          </h3>
          <h3>
            emoji :{" "}
            {
              //@ts-ignore
              WeatherEmojis[
                weather?.weather[0].main
                  ? weather?.weather[0].main
                  : WeatherEmojis.none
              ]
            }
          </h3>
          <h4 className={locationEnum.temp}>
            visibility : {weather?.visibility}
          </h4>
          <h3>{weather?.weather[0].main}</h3>
        </div>
      </div>
    </div>
  );
};
