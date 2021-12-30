import Vue from "vue";
import Vuex from "vuex";
// Import Module For Vuex
import UIModule from './ui/index'
Vue.use(Vuex);



export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: { UIModule },
});