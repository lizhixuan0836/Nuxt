// 添加请求拦截器附加token
export default function ({ $axios, store }) {
  $axios.onRequest((config) => {
    if (store.state.user.token) {
      config.headers.Authorization = 'Bearer ' + store.state.user.token
    }
    return config
  })
}
