import Vue from 'vue'
import VueRouter from 'vue-router'
import Player from './components/Player'
import Courses from './components/Courses'
import Landing from './components/Landing'
//import Main from './components/Main'
import App from './App'
import Dashboard from './components/index'
import Materials from './components/Materials'
import NotFound from './components/NotFound'
import VueMobileDetection from "vue-mobile-detection";
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false


Vue.use(VueRouter);
Vue.use(VueMobileDetection);

const routes = [
  {path: '', component: Landing },
  {
    path: '/dashboard', name:'dashboard', component: Dashboard, 
    children: [
      {path: 'courses', name:'courses', component: Courses},
      {path: 'materials', component: Materials},
      {path: 'materials/:id', component: Materials},
      {path: 'materials/:id/:subid', component: Materials},
      {path: 'materials/:id/:subid/:subsubid', component: Materials},  
      { path: 'player/:id', component: Player },
    ]    
  }, 
  { path: '*', component: NotFound },  
]

const router = new VueRouter({
  routes,
  mode: 'history'
});


new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
