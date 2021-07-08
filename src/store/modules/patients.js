
export default {
    state: {
        patients: [
            {
                surname: 'Иванов',
                name: 'Иван',
                patronymic: 'Иванович',
                birthdate: '19.04.1994',
                sex: 'Мужской',
                snils: '45455455',
                weight: '',
                height: '186',
                age: ''
            },
            {
                surname: 'Горбачев',
                name: 'Антон',
                patronymic: '',
                birthdate: '03.11.1987',
                sex: 'Мужской',
                snils: '78784564',
                weight: '84',
                height: '176',
                age: ''
            },
            {
                surname: 'Малинова',
                name: 'Ольга',
                patronymic: 'Владимировна',
                birthdate: '28.09.2002',
                sex: 'Женский',
                snils: '89555465',
                weight: '48',
                height: '',
                age: '18'
            },
            {
                surname: 'Громова',
                name: 'Галина',
                patronymic: 'Геннадиевна',
                birthdate: '16.01.1997',
                sex: 'Женский',
                snils: '89555465',
                weight: '140',
                height: '',
                age: '24'
            },
            {
                surname: 'Лапухов',
                name: 'Алексей',
                patronymic: '',
                birthdate: '11.10.2001',
                sex: 'Мужской',
                snils: '89555465',
                weight: '73',
                height: '178',
                age: '19'
            },
            {
                surname: 'Смирнов',
                name: 'Павел',
                patronymic: 'Игоревич',
                birthdate: '08.02.1989',
                sex: 'Мужской',
                snils: '89555465',
                weight: '104',
                height: '199',
                age: ''
            },
        ]
},
    getters: {
        allPatients(state) {
            return state.patients
        }
    },
    actions: {},
    mutations:{}
}