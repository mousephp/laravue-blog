import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import publicRoutes from './public.js';
import privateRoutes from './private.js';
import store from '../store/auth' 

const routes = privateRoutes.concat(publicRoutes);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

require('../authorization/guards')(router, store)

export default router;
  
