import Vue from 'vue'
import VueRouter from 'vue-router'
import vuex from 'vuex'
import routes from '../config/routes'

Vue.use(vuex)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
