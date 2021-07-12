<template>
    <div class="forms">
        <form novalidate @submit.prevent="submit">

            <label class="form-label">Фамилия<br>
                <input v-model.trim="surname"
                       @blur="surnameTouch = true"
                       :class="{ 'error': surnameError || surnameInvalid }"
                       class="form-input" type="text"
                       maxlength="15">
                <div v-if="surnameError" class="error-msg">{{msgRequired}}</div>
                <div v-else-if="surnameInvalid" class="error-msg">{{msgInvalid}}</div>
            </label>

            <label class="form-label">Имя<br>
                <input v-model.trim="name"
                       @blur="nameTouch = true"
                       :class="{ 'error': nameError || nameInvalid }"
                       class="form-input" type="text"
                       maxlength="12">
                <div v-if="nameError" class="error-msg">{{msgRequired}}</div>
                <div v-else-if="nameInvalid" class="error-msg">{{msgInvalid}}</div>
            </label>

            <label class="form-label">Отчество<br>
                <input v-model.trim="patronymic"
                       @blur="patronymicTouch = true"
                       :class="{ 'error':  patronymicInvalid }"
                       class="form-input" type="text"
                       maxlength="15">
                <div v-if="patronymicInvalid" class="error-msg">{{msgInvalid}}</div>
            </label>

            <label class="form-label">Дата рождения<br>
                <input v-model.trim="birthdate"
                       @blur="birthdateTouch = true"
                       :class="{ 'error':  birthdateInvalid || birthdateError }"
                       class="form-input" type="date">
                <div v-if="birthdateError" class="error-msg">{{msgRequired}}</div>
                <div v-else-if="birthdateInvalid" class="error-msg">{{msgInvalid}}</div>
            </label>

            <label class="form-label">Пол<br>
                <input v-model.trim="sex"
                       @blur="sexTouch = true"
                       :class="{ 'error': sexError || sexInvalid}"
                       class="form-input" type="text"
                       maxlength="10">
                <div v-if="sexError" class="error-msg">{{msgRequired}}</div>
                <div v-else-if="sexInvalid" class="error-msg">{{msgInvalid}}</div>
            </label>

            <label class="form-label">СНИЛС<br>
                <input v-model.trim="snils"
                       @blur="snilsTouch = true"
                       :class="{ 'error': snilsError || snilsInvalid}"
                       class="form-input" type="text" maxlength="11">
                <div v-if="snilsError" class="error-msg">{{msgRequired}}</div>
                <div v-else-if="snilsInvalid" class="error-msg">{{msgInvalid}}</div>
            </label>

            <hr>

            <section>
                <label class="form-label_mini">Вес<br>
                    <input v-model.trim="weight"
                           @blur="weightTouch = true"
                           :class="{ 'error':  weightInvalid }"
                           class="form-input_mini" type="text" maxlength="3">
                    <div v-if="weightInvalid" class="error-msg">{{msgInvalid}}</div>
                </label>

                <label class="form-label_mini">Рост<br>
                    <input v-model.trim="height"
                           @blur="heightTouch = true"
                           :class="{ 'error':  heightInvalid }"
                           class="form-input_mini" type="text" maxlength="3">
                    <div v-if="heightInvalid" class="error-msg">{{msgInvalid}}</div>
                </label>

                <label class="form-label_mini">Возраст<br>
                    <input v-model.trim="age"
                           @blur="ageTouch = true"
                           :class="{ 'error':  ageInvalid }"
                           class="form-input_mini" type="text" maxlength="2">
                    <div v-if="ageInvalid" class="error-msg">{{msgInvalid}}</div>
                </label>
            </section>

            <div class="btn-container">
                <button type="submit" class="btn" :disabled="disBtn">Создать</button>
            </div>

        </form>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import { required,  helpers, maxValue} from 'vuelidate/lib/validators';
    let alpha = helpers.regex('alpha', /^[ЁА-Яёа-я]*$/);
    const onlyNumbers = helpers.regex('onlyNumbers', /[0-9]/);
    export default {
        name: "newPatient",
        data () {
            return {
                msgRequired: 'Поле обязательно для заполнения',
                msgInvalid: 'Недопустимые символы',
                surname: '',
                surnameTouch: false,
                name: '',
                nameTouch: false,
                patronymic: '',
                patronymicTouch: false,
                birthdate: '',
                birthdateTouch: false,
                sex: '',
                sexTouch: false,
                snils: '',
                snilsTouch: false,
                weight: '',
                weightTouch: false,
                height: '',
                heightTouch: false,
                age: '',
                ageTouch: false,
            }
        },

        methods: {
            ...mapMutations(["createPatient"]),
            // Создание нового пациента
            submit() {
                let idNewPatient = Date.now()
                let patient = {
                    surname: this.surname,
                    name: this.name,
                    patronymic: this.patronymic,
                    birthdate: this.birthdate,
                    sex: this.sex,
                    snils: this.snils,
                    weight: this.weight,
                    height: this.height,
                    age: this.age,
                    id: idNewPatient
                }
                // Отправка данных новго пациента в массив пациентов
             this.createPatient({
                    surname: patient.surname,
                    name: patient.name,
                    patronymic: patient.patronymic,
                    birthdate: patient.birthdate,
                    sex: patient.sex,
                    snils: patient.snils,
                    weight: patient.weight,
                    height: patient.height,
                    age: patient.age,
                    id: patient.id
                });
                // Переадресация на страницу нового пациента
                this.openPatient(patient);
            },
            openPatient: function (patient) {
                this.$router.push({name: 'patientId',
                    params: {
                        id: patient.id,
                        patient: patient
                    }
                });

            },
            // Валидация СНИЛСа
            validateSNILS() {
                this.snils = this.snils.toString().replace(/\D/g, '')

                if (this.snils.length !== 11) return false
                if (/(\d)\1\1/.test(this.snils.toString())) return false

                const controlCode = Number(this.snils.substr(-2))
                let calcCode = this.snils.substr(0, 9).split('').map((N, idx) => Number(N) * (9 - idx)).reduce((Sum, N) => Sum + N)
                if (calcCode === 100) calcCode = 0
                return calcCode % 101 === controlCode;


            }
        },
        // Провера всех обязательных полей ввода
        computed: {
            disBtn() {
                return this.$v.surname.$invalid ||
                    this.$v.name.$invalid ||
                    this.$v.birthdate.$invalid ||
                    this.$v.sex.$invalid ||
                    this.$v.snils.$invalid
            },
            // Валидация полей
            surnameError() {
                return !this.$v.surname.required && this.surnameTouch;
            },
            surnameInvalid() {
                return !this.$v.surname.alpha && this.surnameTouch;
            },
            nameError() {
                return !this.$v.name.required && this.nameTouch;
            },
            nameInvalid() {
                return !this.$v.name.alpha && this.surnameTouch;
            },
            patronymicInvalid() {
                return !this.$v.patronymic.alpha && this.patronymicTouch;
            },
            sexError() {
                return !this.$v.sex.required && this.sexTouch;
            },
            sexInvalid() {
                return !this.$v.sex.alpha && this.sexTouch;
            },
            snilsError() {
                return !this.$v.snils.required && this.snilsTouch;
            },
            snilsInvalid() {
                return !this.validateSNILS() && this.snilsTouch;
            },
            birthdateError() {
                return !this.$v.birthdate.required && this.birthdateTouch;
            },
            birthdateInvalid() {
                return !this.birthdate && this.birthdateTouch;
            },
            weightInvalid() {
                return !this.$v.weight.onlyNumbers && this.weightTouch;
            },
            heightInvalid() {
                return !this.$v.height.onlyNumbers && this.heightTouch;
            },
            ageInvalid() {
                return !this.$v.height.onlyNumbers && this.ageTouch;
            }
        },
        validations: {
            surname:{
                required,
                alpha
            }, name: {
                required,
                alpha
            },
            patronymic: {
               alpha
            },
            birthdate: {
                required,
            },
            sex: {
                required,
                alpha
            },
            snils: {
                required
            },
            weight: {
                onlyNumbers
            },
            height: {
                onlyNumbers
            },
            age: {
                onlyNumbers
            },
        }
    }
</script>

<style scoped>
    .error{
    border: 1px solid red;
    }
    .error-msg{
        color: red;
        font-size: 14px;
    }
    form{
        border: 1px solid #2c3e50;
        background: mintcream;
        padding: 30px;
        margin-top: 30px;
    }
    .form-label{
        display: block;
        margin: 0 auto 6px auto;
        width: 70%;
    }
    .form-input{
        width: 93%;
        font-size: 20px;
        padding: 5px 14px;
        margin: 6px 0;
        border-radius: 5px;
    }
    section{
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 70%;
    }
    .form-input_mini{
        width: 77%;
        font-size: 20px;
        padding: 5px 14px;
        margin-top: 6px;
        border-radius: 5px;
    }
    .btn-container{
        margin: 30px auto;
        text-align: center;
    }
    .btn{
        border-radius: 5px;
        font-size: 20px;
        background: #91cacf;
        width: 130px;
        height: 40px;
    }
    hr{
        width: 69%;
        background-color: #2c3e50;
    }

    @media all and (max-width: 720px){
        .error-msg{
            font-size: 12px;
        }
        .form-label{
            width: 98%;
        }
        .form-input{
            width: 90%;
        }
        hr{
            width: 95%;
        }
        section{
            width: 98%;
        }
        .form-input_mini{
            width: 69%;
            font-size: 18px;
        }
    }
</style>