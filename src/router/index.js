import Vue from 'vue';
import VueRouter from 'vue-router';
import Patients from '../views/patients.vue';
import patientId from "../views/patient/patientId";
let newPatient = () => import('../views/newPatient.vue');
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Patients,
  },
  {
    path: '/newPatient',
    component: newPatient,
  },
  {
    path: '/patient/:id',
    name: 'patientId',
    component: patientId,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
