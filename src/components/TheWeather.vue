<template>
  <div>
    <div class="city-grid">
      <div v-for="row in cityGrid" :key="row[0]">
        <div v-for="city in row" :key="city">
          <div class="weather-card">
            <h2>{{ city }}</h2>
            <div v-if="weatherData[city]">
              <img
                v-if="weatherData[city].weather[0].icon"
                :src="getWeatherIconURL(weatherData[city].weather[0].icon)"
                :alt="weatherData[city].weather[0].description"
              />
              <p>{{ weatherData[city].weather[0].description }}</p>
              <p>현재 온도: {{ weatherData[city].main.temp }}°C</p>
              <p>현재 습도: {{ weatherData[city].main.humidity }}%</p>
              <p>풍속: {{ weatherData[city].wind.speed }} m/s</p>
              <p>풍향: {{ getWindDirection(weatherData[city].wind.deg) }}</p>
              <p>☁️ : {{ weatherData[city].clouds.all }}%</p>
              <p>
                🌧️:
                {{ weatherData[city].rain ? weatherData[city].rain['1h'] : 0 }}
                mm
              </p>
              <p>
                ❄️:
                {{ weatherData[city].snow ? weatherData[city].snow['1h'] : 0 }}
                mm
              </p>
            </div>
            <div v-else>
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  data() {
    return {
      cities: [
        'Seoul',
        'Busan',
        'Incheon',
        'Daegu',
        'Daejeon',
        'Gwangju',
        'Ulsan',
        'Jeju',
      ],
      weatherData: reactive({}),
    };
  },
  computed: {
    cityGrid() {
      const rows = [];
      for (let i = 0; i < this.cities.length; i += 2) {
        const row = [];
        for (let j = 0; j < 2 && i + j < this.cities.length; j++) {
          row.push(this.cities[i + j]);
        }
        rows.push(row);
      }
      return rows;
    },
  },
  created() {
    this.getCitiesWeatherData();
  },
  methods: {
    async getCitiesWeatherData() {
      const apiKey = '902860b247fa7247a9e4b8c0f0a3246c';
      try {
        for (const city of this.cities) {
          const response = await this.$axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
          );
          this.weatherData[city] = response.data;
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    },
    getWindDirection(degrees) {
      const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
      const index = Math.round(degrees / 45) % 8;
      return directions[index];
    },
    getWeatherIconURL(iconCode) {
      return `https://openweathermap.org/img/w/${iconCode}.png`;
    },
  },
};
</script>

<style scoped>
.city-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
}

.weather-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
