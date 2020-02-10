import Vue from 'vue'
import './assets/main.scss';
import Router from 'vue-router'
Vue.use(Router)


import Login from './components/LoginPage.vue'
import Register from './components/RegisterPage.vue'
import App from './App.vue'
const router = new Router({

    routes: [
        { path: '/login', component: Login },
        { path: '/register', component: Register }
    ]
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})