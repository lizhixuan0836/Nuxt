export const actions = {
  // 做持久化处理，刷新token还是有
  nuxtServerInit ({ commit }, { app }) {
    // 通过在store的根模块中定义 nuxtServerInit ⽅法，Nuxt.js 调⽤它的时候会将⻚⾯的上下⽂对象作
    // 为第2个参数传给它。当我们想将服务端的⼀些数据传到客户端时，这个⽅法⾮常好⽤。
    // cookie-universal-nuxt用法如下，app是server实例也就是koa实例，
    const token = app.$cookies.get('token')
    if (token) {
    //   console.log('nuxtServerInit: token:' + token)
      commit('user/init', token)
    }
  }
}
