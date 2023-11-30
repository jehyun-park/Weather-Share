<template>
  <div class="main-page">
    <div class="grid-container">
      <div v-for="videoId in videoIds" :key="videoId" class="grid-item"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoIds: [
        'wxQZ48TgqZk',
        'Cnq-YIdED6Y',
        'wxQZ48TgqZk',
        'wxQZ48TgqZk',
        'wxQZ48TgqZk',
        'wxQZ48TgqZk',
        'wxQZ48TgqZk',
        'wxQZ48TgqZk',
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style>
.main-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 800px;
  height: 400px;
}

.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddddd;
  padding: 20px;
  font-size: 24px;
  background-color: #f0f0f0;
  border-radius: 5px;
}
</style>
