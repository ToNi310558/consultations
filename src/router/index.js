import Vue from 'vue';
import VueRouter from 'vue-router';
import Patients from '../views/patients.vue';
import patientId from "../views/patient/patientId";
import consultations from "../views/patient/consultations";
import refactor from "../views/patient/refactor";
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
    children: [
      {
        path: 'consultations',
        component: consultations,
        name: 'consultations'
      },
      {
        path: 'refactor',
        component: refactor,
        name: 'refactor'
      }
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
