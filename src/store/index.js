import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)

export function creatStore() {
    return Vuex.Store({
        state
    })
}