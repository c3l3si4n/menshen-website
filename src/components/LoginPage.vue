<template>
    <div id="app">
        <section class="hero is-primary is-fullheight  has-bg-img ">
            <div class="hero-body" id="loginForm">
                <div class="container">
                    <div class="columns is-vcentered">

                        <div class="column">
                            <h1 class="title">
                                Menshen
                            </h1>
                            <h2 class="subtitle">
                                Login/Register
                            </h2>
                        </div>
                        <div class="column ">
                            <form action="" @submit.prevent="login">

                                <div class="field">
                                    <div class="control has-icons-left">
                                        <input class="input" type="email" name="email" v-model="inputEmail" id="email" placeholder="Email">
                                        <span class="icon is-small is-left">
                                            <i class="fa fa-envelope"></i>
                                        </span>
                                    </div>

                                </div>
                                <div class="field">
                                    <div class="columns ">
                                        <div class="column">
                                            <div class="control has-icons-left">
                                                <input class="input" type="password" name="password" v-model="inputPassword" id="password" placeholder="Password">
                                                <span class="icon is-small is-left">
                                                    <i class="fa fa-lock"></i>
                                                </span>

                                            </div>
                                        </div>


                                    </div>



                                </div>
                                <div class="is-inline">
                                    <button type="submit" class="button is-primary
                                        is-pulled-right">Login </button>

                                    <button class="button is-text
                                        is-pulled-right">Not a customer yet? </button>
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
  name: 'loginPage',
  data () {
    return {
        inputEmail: '',
        inputPassword: '', 
    }
  }
}
</script>

<style scoped>
.has-bg-img {
    background: linear-gradient( rgba(5, 40, 85, 0.99), rgba(5, 40, 85, 0.99)), url('https://media.giphy.com/media/3oKIPhesuFEOKTvx5e/giphy.gif');
}
</style>
