import { App } from 'vue' //如果没用ts，这个可以去掉
import Switch from './Switch'

//按需引入
const components = [Switch]

//全局引入
const install = (app: App) => {
    components.map(item => {
        app.component(item.name, item)
    })
}

export default {
    install,
    ...components
}