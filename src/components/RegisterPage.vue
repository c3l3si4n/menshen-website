<template>
  <div id="app">
    <section class="hero is-primary is-fullheight  has-bg-img ">
      <div class="hero-body" id="registerForm">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <h1 class="title">
                Menshen
              </h1>
              <h2 class="subtitle">
                Register
              </h2>
            </div>
            <div class="column ">
              <form action="" @submit.prevent="register">
                <div class="field">
                <label class="label">Email</label>

                  <div class="control has-icons-left">
                    <input
                      class="input"
                      type="email"
                      name="email"
                      v-model="inputEmail"
                      id="email"
                      placeholder="Email"
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                                      <label class="label">Password</label>

                  <div class="control has-icons-left">
                    <input
                      class="input"
                      type="password"
                      name="password"
                      
                      v-model="inputPassword"
                      id="password"
                      placeholder="Password"
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                                      <label class="label">Confirm your password</label>

                  <div class="control has-icons-left">
                    <input
                      class="input"
                      type="password"
                      name="passwordConfirm"
                      v-model="inputPasswordConfirm"
                      id="passwordConfirm"
                      placeholder="Confirm your password"
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div class="is-inline">
                  <button
                    type="submit"
                    class="button is-primary
                                        is-pulled-right"
                  >
                    Register
                  </button>

                 <router-link to="/login"> <button
                    class="button is-text
                                        is-pulled-right"
                  >
                    Already have an account?
                  </button>
                  </router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "registerPage",
  data() {
    return {
      inputEmail: "",
      inputPassword: "",
      inputPasswordConfirm: ""
    };
  },
  methods: {
    register: function() {
      alert("registered");
    }
  }
};
</script>

<style scoped>
.has-bg-img {
  background: linear-gradient(rgba(5, 40, 85, 0.99), rgba(5, 40, 85, 0.99)),
    url("https://media.giphy.com/media/3oKIPhesuFEOKTvx5e/giphy.gif");
}
</style>
