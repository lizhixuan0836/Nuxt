// 接⼝注⼊，利⽤插件机制将服务接⼝注⼊组件实例、store实例中，
// 参数1是上下文参数2是注入函数
export default ({ $axios }, inject) => {
  // 将来this.$login
  inject('login', (user) => {
    return $axios.$post('/api/login', user)
  })
}
