<template>
  <div class="main-page">
    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
      <div class="grid-item">5</div>
      <div class="grid-item">6</div>
      <div class="grid-item">7</div>
      <div class="grid-item">8</div>
    </div>
  </div>
</template>

<script>
export default {};
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
