//we are splitting the logic between different sections for the different components
//this js file is for the coaches mutations
export default {
    registerCoach(state,payload) {
        state.coaches.push(payload);
    }
};
