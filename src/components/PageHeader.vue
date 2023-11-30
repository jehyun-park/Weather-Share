<template>
  <header>
    <img src="../assets/logo2.png" alt="Vue logo" />
    <div id="nav">
      <h4><a class="logo" href="/">Weather Share</a></h4>
      <router-link to="/" style="text-decoration: none">Home</router-link> |
      <router-link to="/board/list" style="text-decoration: none"
        >게시판</router-link
      >
      |
      <router-link to="/about" style="text-decoration: none">About</router-link>
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
.logo {
  text-decoration: none;
}
</style>
