
export default {
    state: {
        patients: [
            {
                surname: 'Иванов',
                name: 'Иван',
                patronymic: 'Иванович',
                birthdate: '19.04.1994',
                sex: 'Мужской',
                snils: '15278361414',
                weight: '',
                height: '186',
                age: '',
                id: 1001
            },
            {
                surname: 'Горбачев',
                name: 'Антон',
                patronymic: '',
                birthdate: '03.11.1987',
                sex: 'Мужской',
                snils: '16675209900',
                weight: '84',
                height: '176',
                age: '',
                id: 1002
            },
            {
                surname: 'Малинова',
                name: 'Ольга',
                patronymic: 'Владимировна',
                birthdate: '28.09.2002',
                sex: 'Женский',
                snils: '17027154139',
                weight: '48',
                height: '',
                age: '18',
                id: 1003
            },
            {
                surname: 'Громова',
                name: 'Галина',
                patronymic: 'Геннадиевна',
                birthdate: '16.01.1997',
                sex: 'Женский',
                snils: '19351706177',
                weight: '140',
                height: '',
                age: '24',
                id: 1004
            },
            {
                surname: 'Лапухов',
                name: 'Алексей',
                patronymic: '',
                birthdate: '11.10.2001',
                sex: 'Мужской',
                snils: '15679695946',
                weight: '73',
                height: '178',
                age: '19',
                id: 1005
            },
            {
                surname: 'Смирнов',
                name: 'Павел',
                patronymic: 'Игоревич',
                birthdate: '08.02.1989',
                sex: 'Мужской',
                snils: '16769547839',
                weight: '104',
                height: '199',
                age: '',
                id: 1006
            },
        ]
},
    getters: {
        allPatients(state) {
            return state.patients
        }
    },
    actions: {},
    mutations:{
        createPatient(state, newPatient) {
            state.patients.unshift(newPatient)
        }
    }
}