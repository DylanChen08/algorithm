import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ApiService } from './api'

// 全局挂载
const app = createApp(App)
app.config.globalProperties.$api = ApiService

// 声明类型扩展
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: typeof ApiService
  }
}

app.mount('#app')
