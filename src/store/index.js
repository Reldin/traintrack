import { createStore } from 'vuex';

import trainData from './modules/trainData';

const store = createStore({
    modules: {
        trainData: trainData
    },
    state() {
        return {
            test: "test"
        };
    },
    getters: {
        getTest: state => {
            return state.test;
        }
    },
    mutations: {

    },
    actions: {

    }

});

export default store;