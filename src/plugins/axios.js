// plugins/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  // axios 설정
});

export default {
  install(Vue) {
    Vue.config.globalProperties.$axios = axiosInstance;
  },
};
