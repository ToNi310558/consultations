<template>
    <div>
        <h1>Пациент {{this.$route.params.surname}}
                    {{this.$route.params.name}}
                    {{this.$route.params.patronymic}} </h1>
        <p>Дата рождения {{this.$route.params.birthdate}}</p>
        <h2>Спустя 10 лет!! Страница открылась!!!</h2>
    </div>
</template>

<script>
    export default {
        name: "_id"
    }
</script>

<style scoped>

</style>