<template>
  <header>
    <img src="../assets/logo2.png" alt="Vue logo" />
    <div id="nav">
      <h4>Music Share</h4>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/board/list">게시판</router-link>
    </div>
  </header>
  <hr />
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 50px;
  float: left;
  padding-left: 5px;
  padding-top: 30px;
}
h4 {
  float: left;
  padding-left: 15px;
}
</style>
