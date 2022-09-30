const axios = require("axios");

export default {
  async getCurrentWeather() {
    return axios.get(
      "https://foxi.ltam.lu/1CI/pirda350/public/OmniWeather/getLatest.php"
    );
  },
};
