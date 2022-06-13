import api from "../services/api";
const axios = require("axios");

function getStringFromDate(date) {
  let string =
    date.getFullYear().toString() +
    "-" +
    ((date.getMonth() + 1).toString().length == 1
      ? "0" + (date.getMonth() + 1).toString()
      : (date.getMonth() + 1).toString()) +
    "-" +
    (date.getDate().toString().length == 1
      ? "0" + date.getDate().toString()
      : date.getDate().toString()) +
    "-" +
    (date.getHours().toString().length == 1
      ? "0" + date.getHours().toString()
      : date.getHours().toString()) +
    "-00.json";
  return string;
}

export default {
  async getCurrentWeather() {
    const response = await axios.get(
      "https://worldtimeapi.org/api/timezone/Europe/Luxembourg"
    );
    if (!response) {
      console.log("No response handed.");
    }
    var dateObj = response.data;
    var dateTime = dateObj.datetime;
    let fancyDate = new Date(dateTime);

    let data = null;
    let passed = false;
    while (!passed) {
      try {
        data = await api.get(getStringFromDate(fancyDate));
        passed = true;
      } catch {
        fancyDate = new Date(+fancyDate - 3600000);
      }
    }
    return data;
  },
};
