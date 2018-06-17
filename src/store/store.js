import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: { // We use getters to access state variables with some modifications(calculations)
        // to avoid such repeats inside our application components.
        doubleCounter: state => {
            return state.counter * 2;
        }
    }
});