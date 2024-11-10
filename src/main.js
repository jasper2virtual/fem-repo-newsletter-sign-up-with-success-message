import { createApp,ref } from 'vue'
import './style.scss'
import App from './App.vue'

const mql = window.matchMedia("(min-width: 1440px)");
const isDesktop = ref(mql.matches);

mql.addEventListener("change", (e) => {
  isDesktop.value = e.matches;
});

const app=createApp(App)

app.provide('isDesktop',isDesktop)

app.mount('#app')
