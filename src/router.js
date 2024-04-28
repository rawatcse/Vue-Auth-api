import { Router,createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Forgot from './components/Forgot.vue';
import Reset from './components/Reset.vue';

const routes = [
    {path:'/',component:Home},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'/forgot',component:Forgot},
    {path:'/reset/:token',component:Reset},
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes
  })

    export default router;
