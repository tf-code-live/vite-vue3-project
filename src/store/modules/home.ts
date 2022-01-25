import { Module } from 'vuex'
import { IGlobalState } from '..'
import { IHomeState } from '@/typings'

const state: IHomeState = {
    count: 0   
}

const home: Module<IHomeState, IGlobalState> = {
    namespaced: true,
    state
}

export default home