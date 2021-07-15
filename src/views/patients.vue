<template>
  <div class="patients">

      <div class="patients-head">
          <label for="filter">
              <input type="radio" id="filter" v-model="filter" @click="filterPatients">В алфавитном порядке
          </label>

          <div class="patient-search">
              <input type="search" class="search" v-model="filterValue" placeholder="Введите ФИО или СНИЛС">
          </div>
      </div>

    <div v-for="patient in searchPatient" :key="patient.id"  class="patient-flexbox">
      <div class="patient-fio">
          <a href="#" @click.prevent="openPatient(patient)">
              {{patient.surname}}
              {{patient.name}}
              {{patient.patronymic}}
          </a>
      </div>
      <div class="patient-birthdate">{{patient.birthdate}}</div>
    </div>
  </div>

</template>

<script>
import {mapGetters} from 'vuex';


export default {
  name: 'Patients',
  components: {
  },
    data() {
        return{
            filterValue: '',
            filter: false
        }
    },
  computed: {
      ...mapGetters(["allPatients"]),
      // Поиск пациента
      searchPatient: function() {
          let result = this.allPatients
          // Проверка на пустую поисковую строку
          if (!this.filterValue)
              return result

          const filterValue = this.filterValue.toLowerCase()
          // Поиск пациента по фио или снилс
          const filters = patient =>
              patient.name.toLowerCase().includes(filterValue) ||
              patient.surname.toLowerCase().includes(filterValue) ||
              patient.patronymic.toLowerCase().includes(filterValue) ||
              patient.snils.includes(filterValue)
            console.log(filters())
          return result.filter(filters)
      }
  },
    methods: {
      ...mapActions(["getPatients"]),
        // Переход на страницу с данными пациента
        openPatient: function (patient) {
            this.$router.push({name: 'patientId',
                params: {
                id: patient.id,
                patient: patient
                }
            });
        },
        // Сортировка пользователей по алфавиту
        filterPatients() {
                function compare(a, b) {
                    if (a.surname < b.surname)
                        return -1;
                    if (a.surname > b.surname)
                        return 1;
                    return 0;
                }
                return this.searchPatient.sort(compare);
        }
    }
}
</script>

<style scoped lang="less">
  .patients{
    border: 1px solid #2c3e50;
    background: mintcream;
    padding: 30px;
    margin-top: 30px;
  }
  a{
      text-decoration: none;
      color: #2c3e50;
  }
  a:hover{
      border-bottom: 2px solid #2c3e50;
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
  .patients-head{
      display: flex;
      justify-content: space-between;
      align-content: center;
  }
  .patient-search{
      text-align: right;
      margin-bottom: 20px;
  }
  .search{
      padding: 4px 12px;
      font-size: 16px;
      min-width: 250px;
      border-radius: 5px;
  }
  // версии для смартфонов
  @media all and (max-width: 720px){
      .patients{
          padding: 22px;
      }
      .patient-flexbox{
          padding: 10px 16px;
      }
      .patient-birthdate{
          font-size: 15px;
      }
      .search{
          width: 100%;
          margin-top: 10px;
      }
      .patients-head{
          display: block;
      }
  }
</style>
