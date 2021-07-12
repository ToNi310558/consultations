<template>
    <div class="patient">

        <div class="patient-actions">
            <button value="refactor">Редактировать</button>
            <button value="delete" @click="deleteThisPatient">Удалить</button>
        </div>

        <table>
            <tr><th>ФИО: </th><th>{{$route.params.patient.surname}} {{$route.params.patient.name}} {{$route.params.patient.patronymic}}</th></tr>
            <tr><td>Дата рождения: </td><td>{{$route.params.patient.birthdate}}</td></tr>
            <tr><td>Пол: </td><td>{{$route.params.patient.sex}}</td></tr>
            <tr><td>СНИЛС: </td><td>{{$route.params.patient.snils}}</td></tr>
            <tr><td>Вес: </td><td>{{$route.params.patient.weight}}</td></tr>
            <tr><td>Рост: </td><td>{{$route.params.patient.height}}</td></tr>
            <tr><td>Возраст: </td><td>{{$route.params.patient.age}}</td></tr>
        </table>


    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: "patientId",
        // Получение данных пациента
     props: {
         patient:{patient: [String, Number]}
     },
     methods: {
            ...mapMutations(["deletePatient"]),
         // Удаление пациента из массива
         deleteThisPatient() {
            this.deletePatient(this.$route.params.id);
            this.$router.push( {path: '/'})
         }
     }
  }
</script>

<style scoped>
.patient{
    border: 1px solid #2c3e50;
    background: mintcream;
    padding: 30px;
    margin-top: 30px;
}
.patient-actions{
    margin-bottom: 20px;
}
button{
    border-radius: 5px;
    font-size: 20px;
    background: #91cacf;
    height: 40px;
    margin-right: 20px;
}
table {
    border: 1px solid grey;
    border-collapse: collapse;
    width: 100%;
    background: linear-gradient(mintcream, #c3faf0);
}
th, td {
    border: 1px solid grey;
    padding: 4px 2%;
}

@media all and (max-width: 720px){
    .patient{
        padding: 22px;
    }
    button{
        font-size: 16px;
        height: 30px;
    }
}
</style>