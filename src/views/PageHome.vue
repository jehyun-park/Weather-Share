<template>
  <div class="home">
    <MidContainer />
    <TheWeather />
  </div>
</template>

<script>
import TheWeather from '@/components/TheWeather.vue';

export default {
  name: 'PageHome',
  components: {
    TheWeather,
  },
};
</script>
