<template>
  <div class="patients">

   <filters/>

    <div v-for="patient in allPatients"  class="patient-flexbox">
      <div class="patient-fio">
        {{patient.surname}}
        {{patient.name}}
        {{patient.patronymic}}
      </div>
      <div class="patient-birthdate">{{patient.birthdate}}</div>
    </div>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'
import Filters from "../components/filters";

export default {
  name: 'Patients',
  components: {
    Filters
  },
  computed: mapGetters(["allPatients"])
}
</script>

<style scoped lang="less">
  .patients{
    border: 1px solid #2c3e50;
    background: mintcream;
    padding: 30px;
      margin-top: 30px;
  }
  .new-patient{
      .patient-flexbox;
      justify-content: center;
      margin: 6px 200px 10px 200px;
      a{
          text-decoration: none;
          color: #2c3e50;
      }
  }
  .patient-flexbox{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    border: 1px solid #2c3e50;
    margin-bottom: 6px;
    border-radius: 5px;
  }
  .patient-birthdate{
    opacity: .8;
    font-size: 18px;
  }
</style>
