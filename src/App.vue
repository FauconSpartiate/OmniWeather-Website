<template>
  <v-app>
    <v-app-bar app color="#4DBA87" dark flat>
      <h2>OmniWeather</h2>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row class="d-flex justify-center">
          <v-col v-if="isOffline" cols="11" md="10">
            <v-alert type="error" dismissible>
              Vous êtes hors ligne, veuillez vous connecter au réseau et
              rafraîchir la page.
            </v-alert>
          </v-col>
        </v-row>
        <v-row v-if="currentLocation" class="d-flex justify-center">
          <v-col cols="12" lg="6">
            <CurrentWeatherCard />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CurrentWeatherCard from "./components/CurrentWeatherCard";

export default {
  name: "App",

  components: {
    CurrentWeatherCard,
  },

  data: () => ({
    currentLocation: "Luxembourg",
    isOffline: null,
  }),

  created() {
    if (navigator.onLine) {
      this.isOffline = false;
    } else {
      this.isOffline = true;
    }
  },
};
</script>
