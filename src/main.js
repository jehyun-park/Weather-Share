import './assets/common.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import mitt from 'mitt';

import firebase from 'firebase/app';
import 'firebase/firestore';

import axiosPlugin from './plugins/axios';

var firebaseConfig = {
  apiKey: 'AIzaSyCXvpnYm7SNEy4Dm6fZhWkIGXmpylZZeDg',
  authDomain: 'blended-42ef5.firebaseapp.com',
  projectId: 'blended-42ef5',
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

let emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(router).mount('#app');
app.use(axiosPlugin);
