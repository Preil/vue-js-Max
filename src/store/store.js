import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter'

import * as actions from './actions.js'
import * as mutations from './mutations.js'
import * as getters from './getters'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters,
    mutations,
    actions,
    modules: {
        counter
    }
});