<template>
    <div class="patient">

        <div class="patient-actions">
            <button @click="refactorPatient">Редактировать</button>
            <button @click="deleteThisPatient">Удалить</button>
        </div>

        <table>
            <tr><th>ФИО: </th><th>{{this.patientInfo.surname}} {{this.patientInfo.name}} {{this.patientInfo.patronymic}}</th></tr>
            <tr><td>Дата рождения: </td><td>{{this.patientInfo.birthdate}}</td></tr>
            <tr><td>Пол: </td><td>{{this.patientInfo.sex}}</td></tr>
            <tr><td>СНИЛС: </td><td>{{this.patientInfo.snils}}</td></tr>
            <tr><td>Вес: </td><td>{{this.patientInfo.weight}}</td></tr>
            <tr><td>Рост: </td><td>{{this.patientInfo.height}}</td></tr>
            <tr><td>Возраст: </td><td>{{this.patientInfo.age}}</td></tr>
        </table>
        <button @click="patientConsultations" class="btn-consult">Консультации пациента</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: "patientId",
        data() {
            return{
                patientInfo: {
                    id: this.$route.params.id,
                    surname: this.$route.params.patient.surname,
                    name: this.$route.params.patient.name,
                    patronymic: this.$route.params.patient.patronymic,
                    birthdate: this.$route.params.patient.birthdate,
                    sex: this.$route.params.patient.sex,
                    snils: this.$route.params.patient.snils,
                    weight: this.$route.params.patient.weight,
                    height: this.$route.params.patient.height,
                    age: this.$route.params.patient.age,
                },
            }
        },
        // Получение данных пациента
     props: {
         patient:{}
     },
     methods: {
            ...mapMutations(["deletePatient"]),
         // Удаление пациента из массива
         deleteThisPatient() {
            this.deletePatient(this.id);
            this.$router.push( {path: '/'});
         },
         refactorPatient() {
             this.$router.push({name: 'refactor'});
         },
         patientConsultations: function () {
             this.$router.push({name: 'consultations'});
        },
     },
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
    margin-bottom: 30px;
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
.btn-consult{
    margin-top: 30px;
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