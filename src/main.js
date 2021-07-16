import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.config.devtools = true;

new Vue({
  router,
  store,
  created() {
    let firebaseConfig = {
      apiKey: "AIzaSyCuDqhLe478i2zerF83I2ShMaUJneWlDmE",
      authDomain: "consults-1da23.firebaseapp.com",
      databaseURL: "https://consults-1da23-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "consults-1da23",
      storageBucket: "consults-1da23.appspot.com",
      messagingSenderId: "413103432056",
      appId: "1:413103432056:web:5ed729d511794b13f2288d",
      measurementId: "G-WJ1FT17HKJ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(()=>{
      this.$store.dispatch('getPatients')
    })
  },
  render: h => h(App)
}).$mount('#app')