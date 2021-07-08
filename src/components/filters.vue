<template>
    <div class="patients-head">
        <label for="filter">
            <input type="checkbox" id="filter">В алфавитном порядке
        </label>

        <div class="patient-search">
            <input type="search" class="search" placeholder="Введите ФИО или СНИЛС">
            <button type="button" class="search-btn">Поиск</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "filters"
    }
</script>

<style scoped>
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
        margin-right: 10px;
        padding: 4px 12px;
        font-size: 16px;
        min-width: 250px;
        border-radius: 5px;
    }
    .search-btn{
        height: 30px;
        border-radius: 5px;
        font-size: 16px;
    }
</style>