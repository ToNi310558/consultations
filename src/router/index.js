import Vue from 'vue'
import VueRouter from 'vue-router'
import Patients from '../views/patients.vue'
let newPatient = () => import('../views/newPatient.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Patients',
    component: Patients
  },
  {
    path: '/newPatient',
    name: 'newPatient',
    component: newPatient
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
