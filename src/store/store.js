import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters: {
        value: state => {
            return state.value;
        }
    },
    mutations: { // Mutations must run synchronously, no asynchronous tasks allowed to be inside mutation.
                    // for this reason we have "actions" which are able to do asynchronous tasks and after fulfilling - commit mutations.

        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    actions: {

        updateValue: ({commit}, payload) => {
            commit('updateValue', payload);
        }
    },
    modules: {
        counter
    }
});