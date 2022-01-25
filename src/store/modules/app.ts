import { Module, MutationTree, ActionTree } from 'vuex'
import { IGlobalState } from '..'
import { IAppState } from '@/typings'

const state: IAppState = {
    isCollapse: false
}

const mutations: MutationTree<IAppState> = {
    SET_COLLAPSE(state) {
        state.isCollapse = !state.isCollapse
    }
}

const actions: ActionTree<IAppState, IGlobalState> = {
    set_collapse({commit}) {
        commit('SET_COLLAPSE')
    }
}

const app: Module<IAppState, IGlobalState> = {
    namespaced: true,
    state,
    mutations,
    actions
}

export default app