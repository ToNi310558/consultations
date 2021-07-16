import consultations from "./consultations";
export default {
    state: {
        patients: [
            {
                surname: 'Иванов',
                name: 'Иван',
                patronymic: 'Иванович',
                birthdate: '1994-04-19',
                sex: 'Мужской',
                snils: '15278361414',
                weight: '',
                height: '186',
                age: '',
                id: 1001,
                consultate: [ ]
            },
            {
                surname: 'Горбачев',
                name: 'Антон',
                patronymic: '',
                birthdate: '1987-11-03',
                sex: 'Мужской',
                snils: '16675209900',
                weight: '84',
                height: '176',
                age: '',
                id: 1002,
                consultate: [ ]
            },
            {
                surname: 'Малинова',
                name: 'Ольга',
                patronymic: 'Владимировна',
                birthdate: '2002-09-28',
                sex: 'Женский',
                snils: '17027154139',
                weight: '48',
                height: '',
                age: '18',
                id: 1003,
                consultate: [ ]
            },
            {
                surname: 'Громова',
                name: 'Галина',
                patronymic: 'Геннадиевна',
                birthdate: '1997-01-16',
                sex: 'Женский',
                snils: '19351706177',
                weight: '140',
                height: '',
                age: '24',
                id: 1004,
                consultate: [ ]
            },
            {
                surname: 'Лапухов',
                name: 'Алексей',
                patronymic: '',
                birthdate: '2001-10-11',
                sex: 'Мужской',
                snils: '15679695946',
                weight: '73',
                height: '178',
                age: '19',
                id: 1005,
                consultate: [ ]
            },
            {
                surname: 'Смирнов',
                name: 'Павел',
                patronymic: 'Игоревич',
                birthdate: '1989-02-08',
                sex: 'Мужской',
                snils: '16769547839',
                weight: '104',
                height: '199',
                age: '',
                id: 1006,
                consultate: []
            },
        ]
},
    getters: {
        allPatients(state) {
            return state.patients;
        }
    },
    actions: {
        addConsultations() {
          let consult =  this.consultations
        }
    },
    mutations:{
        createPatient(state, newPatient) {
            state.patients.unshift(newPatient);
        },
        deletePatient(state, patientId) {
          let del = state.patients.findIndex(i => i.id === patientId);
            state.patients.splice(del, 1);
        }
    }
}