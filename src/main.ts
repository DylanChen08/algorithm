import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { mergeArrays, mergeMultipleArrays } from './api'   

console.log(mergeArrays([1, 2, 3], [4, 5, 6]))
console.log(mergeMultipleArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]))

createApp(App).mount('#app')
