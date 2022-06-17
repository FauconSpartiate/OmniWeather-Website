const axios = require("axios");

export default {
  async getCurrentWeather() {
    return await axios.get(
      "https://foxi.ltam.lu/2CI/pirda350/public/OmniWeather/getLatest.php"
    );
  },
};
