import { createStore } from 'vuex'
import { IHomeState, IAppState } from '@/typings'
import home from './modules/home'
import app from './modules/app'

// 模块声明在根状态下
export interface IGlobalState {
    home: IHomeState,
    app: IAppState
}

const store = createStore({
    modules: {
        home,
        app
    }
})

export default store