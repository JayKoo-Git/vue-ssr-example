import Vue from 'vue'
import { creatStore } from './store'
import { createRouter } from './router'

export function createApp() {
    
    const store = creatStore()

    const router = createRouter()

    const app = new Vue({
        store,
        router,
        render: h => h(App)
    })

    return { app, store, router }

}