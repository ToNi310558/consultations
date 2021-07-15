
export default {
    state: {
        patients: []
},
    getters: {
        allPatients(state) {
            return state.patients;
        }
    },
    actions: {
       async getPatients(ctx) {
            const res = await fetch('https://consultations-5b0c5-default-rtdb.europe-west1.firebasedatabase.app/');
            const patients =  res.json();
            ctx.commit('updatePatients', patients)
        }
    },
    mutations:{
        updatePatients(state, patients) {
            state.patients = patients
        },
        createPatient(state, newPatient) {
            state.patients.unshift(newPatient);
        },
        deletePatient(state, patientId) {
          let del = state.patients.findIndex(i => i.id === patientId);
            state.patients.splice(del, 1);
        }
    }
}