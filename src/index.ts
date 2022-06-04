import type { App } from 'vue'
import "@/styles/code.css";
import "@/styles/base/inset.css";
import { Switch, Button } from '@/packages/index'

// //按需引入
const components = [Switch, Button]

//全局引入, 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const installUi = (app: App) => {
    // 遍历注册全局组件
    components.map(item => {
        app.component(item.name, item)
    })
}

export { installUi }