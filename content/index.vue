<script setup>
import { ref, onServerPrefetch } from 'vue'
import { getWeather } from '../src/utilities/weather.js'

const weather = ref(null)

onServerPrefetch(async () => {
  weather.value = await getWeather()
})
</script>

<script>
export default {
  // Eleventy doesn’t pick up exposed data from `<script setup>`.
  data () {
    return {
      title: 'Eleventy Demo with Vue.js',
      description: 'Using eleventy-plugin-vue to build the layouts for a static site.'
    }
  }
}
</script>

<template>
  <h1>{{ title }}</h1>
  <ul>
    <li><a href="/text/">markdown demo</a></li>
    <li><a href="/dev-server/">eleventy-dev-server demo</a></li>
  </ul>

  <section>
    <h2>Weather in {{ weather.name }}</h2>
    <dl>
      <div>
        <dt>Temperature</dt>
        <dd>{{ weather.main.temp }} °C</dd>
      </div>

      <div>
        <dt>Feels like</dt>
        <dd>{{ weather.main.feels_like }} °C</dd>
      </div>

      <div>
        <dt>Humidity</dt>
        <dd>{{ weather.main.humidity }} %</dd>
      </div>
    </dl>
  </section>
</template>
