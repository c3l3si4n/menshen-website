import Vue from 'vue'
import './assets/main.scss';
import Router from 'vue-router'
Vue.use(Router)


import Login from './components/LoginPage.vue'
import App from './App.vue'
const router = new Router({

    routes: [
        { path: '/login', component: Login }
    ]
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,

    // replace the content of <div id="app"></div> with App
    render: h => h(App)
})