let authData = {
    inputEmail: '',
    inputPassword: '',
}

function validateEmail(email) {
    let validate = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return validate.test(email);
}

let vm = new Vue({
    el: "#app",
    data: authData,
    watch: {
        inputPassword: function(newInput, oldInput) {

        }
    },
    methods: {
        login: () => {

        }
    },
})