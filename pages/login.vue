<template>
  <div>
    <h2>⽤户登录</h2>
    <a-input v-model="user.username" />
    <a-input v-model="user.password" type="password" />
    <a-button @click="onLogin">
      登录
    </a-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onLogin () {
      this.$store.dispatch('user/login', this.user).then((ok) => {
        if (ok) {
          const redirect = this.$route.query.redirect || '/'
          console.log(redirect, 11111)
          this.$router.push(redirect)
        } else {
          alert('登录失败')
        }
      })
    }
  }
}
</script>
