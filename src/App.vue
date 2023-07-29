<template>
  <PageHeader />
  <!-- 헤더 컴포넌트 -->
  <router-view :게시글="게시글" />
  <!-- 페이지 이동이 표시될 곳 -->
  <PageFooter />
  <!-- 푸터 컴포넌트 -->
</template>

<script>
import PageHeader from '@/components/PageHeader';
import PageFooter from '@/components/PageFooter';
import listdata from './assets/listdata';

export default {
  data() {
    return {
      게시글: listdata,
    };
  },
  name: 'App',
  components: {
    PageFooter,
    PageHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
