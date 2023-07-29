<template>
  <h4>글상세 페이지임</h4>
  <h5>{{ 게시글[$route.params.id].title }}</h5>
  <p>{{ 게시글[0].content }}</p>
  <h10>{{ 게시글[$route.params.id].date }}</h10>
  <router-view></router-view>
</template>
<script>
export default {
  props: {
    게시글: Array,
  },
};
</script>
<style></style>
