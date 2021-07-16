import firebase from "firebase/app";
export default {
    state: {
        patients: { }
},
    getters: {
        allPatients(state) {
            return state.patients;
        }
    },
    actions: {
       async getPatients(ctx) {
            const patient = await firebase.database().ref('patients').once("value");
            const patients = patient.val()
            ctx.commit('updatePatients', patients);
        },
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