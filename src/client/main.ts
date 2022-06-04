import { createApp } from 'vue'
import App from './App.vue'
import ui from '../packages/index'
import router from '../router/index'
import hljs from "highlight.js";
import "@/styles/code.css";
hljs.configure({
    ignoreUnescapedHTML: true,
    languages: [
        "javascript",
        "css",
        "python",
        "html",
        "bash",
        "java",
        "sql",
        "json",
        "http",
        "go",
        "c++",
        "c#",
        "",
    ],
});

const app = createApp(App)
app.directive("highlight", el => {
    const blocks = el.querySelectorAll("pre code");
    blocks.forEach((block: HTMLElement) => {
        hljs.highlightBlock(block);
    });
});
app.use(router)
app.use(ui)
app.mount('#app')