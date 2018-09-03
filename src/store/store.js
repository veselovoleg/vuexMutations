import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import counter from './modules/counter';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    mutations,
    actions,
    modules: {
        counter
    }
});