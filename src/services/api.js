import axios from "axios";

export default axios.create({
  baseURL:
    "https://foxi.ltam.lu/2CI/pirda350/public/OmniWeather/Weather_Reports/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
