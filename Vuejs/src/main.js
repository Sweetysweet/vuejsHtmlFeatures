import Vue from 'vue'
import App from './App.vue'

import Vuelidate from 'vuelidate'
import Navbar from '@/components/app/Navbar'
import Sidebar from "@/components/app/Sidebar";

import router from './router'
import store from './store'

import messagePlugin from '@/utils/message.plugin'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import Loader from '@/components/app/Loader'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)


Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)

Vue.component('Sidebar', Sidebar)
Vue.component('Navbar', Navbar)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyDgxyZXmDekIHJXvslfMZvB9PiwISE3LNQ",
  authDomain: "vue-crm-67f1c.firebaseapp.com",
  databaseURL: "https://vue-crm-67f1c.firebaseio.com",
  projectId: "vue-crm-67f1c",
  storageBucket: "vue-crm-67f1c.appspot.com",
  messagingSenderId: "493107365190",
  appId: "1:493107365190:web:9d5334da7592bcde325147"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

