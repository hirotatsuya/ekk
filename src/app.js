import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.css'
import './theme/uikit.app-theme.scss'
UIkit.use(Icons);

import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './utils/routes'
Vue.use(VueRouter)

export const router = new VueRouter({
  routes
})

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

import './utils/console'
