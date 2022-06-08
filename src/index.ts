import type { App } from 'vue'
import "@/styles/base/code.css";
import "@/styles/base/inset.css";
import { Switch, Button, Player } from '@/packages/index'

// //按需引入
const components = [Switch, Button, Player]

//全局引入, 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
// const LightPlayer = (app: App) => {
//     // 遍历注册全局组件
//     components.map(item => {
//         app.component(item.name, item)
//     })
// }

// export { LightPlayer }

//全局引入, 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = (app: App) => {
    LightPlayer(app)
}

const LightPlayer = (app: App) => {
    // 遍历注册全局组件
    components.map(item => {
        app.component(item.name, item)
    })
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    LightPlayer,
    ...components
}

export {
    Switch, Button, Player, install, LightPlayer
}