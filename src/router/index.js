import { createRouter, createWebHistory } from 'vue-router';
// import store from '../store';
// import { citys } from "../assets/citys";
import Home from '../views/Home.vue'
import cityProfile from "../views/cityProfile";
import Contact from "../views/Contact.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/city/:cityId',
    name: 'cityProfile',
    component: cityProfile
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router
