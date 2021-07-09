import Vue from 'vue'
import VueRouter from 'vue-router'
import Patients from '../views/patients.vue'
const newPatient = () => import('../views/newPatient.vue')
import patient from '../views/patient/_id'
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
  },
  {
    path: '/patient/_id',
    name: 'patient',
    component: patient
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
