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
        },
        clicksCounter: state => {
            return state.counter + ' clicks';
        }
    },
    mutations: { // Mutations must run synchronously, no asynchronous tasks allowed to be inside mutation.
                    // for this reason we have "actions" which are able to do asynchronous tasks and after fulfilling - commit mutations.
        increment: state => {
            state.counter++;
        },
        decrement: state => {
            state.counter--;
        }
    },
    actions: {
        increment: ({commit}) => {
            commit('increment');
        }, // this is shorter form code. We get just property, which is needed for committing mutation.
        decrement: ({commit}) => {
            commit('decrement');
        },
        asyncIncrement: ({commit}) => {
            setTimeout(()=> {
                commit('increment');
            }, 1000);
        },
        asyncDecrement: ({commit}) => {
            setTimeout(()=> {
                commit('decrement');
            }, 1000);
        }
    }
});