import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/index.scss'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as Icons from '@element-plus/icons-vue'

// 初始化css
import 'normalize.css/normalize.css'

let app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus, {
    locale: zhCn,
})
app.mount('#app')

// 注册全局图标组件
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key as keyof typeof Icons])
})