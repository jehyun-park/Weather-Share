import { createRouter, createWebHistory } from 'vue-router';
import PageHome from '@/views/PageHome.vue';
import BoardList from '@/views/board/BoardList.vue';
import BoardDetail from '@/views/board/BoardDetail.vue';
import BoardWrite from '@/views/board/BoardWrite.vue';

const routes = [
  {
    path: '/',
    name: 'PageHome',
    component: PageHome,
  },
  {
    path: '/about',
    name: 'PageAbout',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/PageAbout.vue'),
  },
  {
    path: '/board/list',
    component: BoardList,
  },
  {
    path: '/board/detail/:id',
    component: BoardDetail,
  },
  {
    path: '/board/write',
    component: BoardWrite,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
