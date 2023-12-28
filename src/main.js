import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/assets/tailwind.css'
import i18n from "@/assets/i18n";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ripple from "@/directive/ripple.js";

const app = createApp(App)
// 注册element图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// 涟漪指令
app.directive('ripple', ripple)
app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
