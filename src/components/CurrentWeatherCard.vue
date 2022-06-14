<template>
  <v-card v-if="weather" class="pb-4">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5">
          Actuellement au Lycée des Arts et Métiers
        </v-list-item-title>
        <v-list-item-subtitle>
          Dernière mise à jour : {{ weather.time }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn
          fab
          dark
          small
          depressed
          color="#4DBA87"
          title="Refresh"
          @click="getWeatherData(), (alert = true), hide_alert()"
        >
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-alert
      :value="alert"
      color="blue"
      type="info"
      text
      transition="slide-y-transition"
      >Les données ont bien été mises à jour.</v-alert
    >
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <p class="text-h4">{{ weather.temperature }}&deg;C</p>
          <p>
            <v-icon right>mdi-human-handsup</v-icon>
            Ressenti {{ weather.temperature }}&deg;C
          </p>
        </v-col>
      </v-row>
    </v-card-text>

    <v-row>
      <v-col class="py-0" cols="12" sm="6">
        <v-list-item title="Wind speed">
          <v-list-item-icon>
            <v-icon>mdi-weather-windy</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>
            Vitesse du vent : {{ weather.wind_speed }} km/h
          </v-list-item-subtitle>
        </v-list-item>

        <v-list-item title="Wind direction">
          <v-list-item-icon>
            <v-icon>mdi-sign-direction</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>
            Direction du vent : {{ weather.wind_direction }}
          </v-list-item-subtitle>
        </v-list-item>

        <v-list-item title="Pressure">
          <v-list-item-icon>
            <v-icon>mdi-cloud-download</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>
            Pression atmosphérique : {{ weather.barometric_pressure }} mbar
          </v-list-item-subtitle>
        </v-list-item>
      </v-col>
      <v-col class="py-0" cols="12" sm="6">
        <v-list-item title="Humidity">
          <v-list-item-icon>
            <v-icon>mdi-water-percent</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>
            Humidité : {{ weather.humidity }} %
          </v-list-item-subtitle>
        </v-list-item>

        <v-list-item title="Precipitation amount">
          <v-list-item-icon>
            <v-icon>mdi-umbrella</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>
            Quantité de précipitation : {{ weather.rain }} mm/h
          </v-list-item-subtitle>
        </v-list-item>

        <v-list-item title="UV Index">
          <v-list-item-icon>
            <v-icon>mdi-sunglasses</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>
            Indice UV : {{ weather.UV }} UV
          </v-list-item-subtitle>
        </v-list-item>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import weatherService from "../services/weather";

export default {
  created() {
    this.getWeatherData();
  },

  data() {
    return {
      weather: null,
      alert: false,
    };
  },

  methods: {
    getWeatherData() {
      weatherService.getCurrentWeather().then((response) => {
        this.weather = response.data;
      });
    },

    hide_alert() {
      window.setTimeout(() => {
        this.alert = false;
      }, 3000);
    },
  },
};
</script>
