import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        A: {
            base: null,
            additions: []
        },
        B: {
            base: null,
            additions: []
        },
        C: {
            base: null,
            additions: []
        },
        activePane: null,
    },
    mutations: {
        CHANGE_BASE(state, payload) {
            state[payload.pane]["base"] = payload.base
        },
        APPEND_ADDITION(state, payload) {
            state[payload.pane]["additions"].push(payload.addition)
        },
        REMOVE_ADDITION(state, payload) {
            state[payload.pane]["additions"].splice(payload.index,1)
        },
        CHANGE_ACTIVE_PANE(state, payload) {
            state.activePane = payload
        },
        REMOVE_BASE(state, payload) {
            state[payload]["base"] = null
            state[payload]["additions"] = []
        },
    },
    actions: {
        appendAddition(context, payload) {
            context.commit('APPEND_ADDITION', payload)
        },
        removeAddition(context, payload) {
            context.commit('REMOVE_ADDITION', payload)
        },
        changeBase(context, payload) {
            context.commit('CHANGE_BASE', payload)
        },
        changeActivePane(context, payload){ 
            context.commit('CHANGE_ACTIVE_PANE', payload)
        },
        removeBase(context, payload) {
            context.commit('REMOVE_BASE',payload)
        },
    },
    getters: {
        getBase(state, panel) {
            return state[panel]["base"]
        },
        getActive(state) {
            return state.activePane
        },
        getPane:(state) => (el) => {
            return state[el]
        }
    }
})