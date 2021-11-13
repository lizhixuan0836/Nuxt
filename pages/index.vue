<template>
  <div>
    <h2>商品列表</h2>
    <h2>商品总数： {{ goods.length }}</h2>
    <ul>
      <li v-for="good in goods" :key="good.id">
        <nuxt-link :to="`/detail/${good.id}`">
          <span>{{ good.text }}</span>
          <span>￥{{ good.price }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'BaseLayout',
  async asyncData ({ $axios, error }) {
    // asyncData中不能使用this获取组件实例（这个时间早于实例的创建），但是可以通过上下文获取相关数据
    const { ok, goods } = await $axios.$get('/api/goods')
    if (ok) {
      // 此处返回的数据会和data进行合并
      return {
        goods
      }
    }
    error({ statusCode: 400, mseeage: '数据查询失败请重试' })
  },
  // data () {
  //   return {
  //     goods: [
  //       // { id: 1, text: 'html', price: 1000 },
  //       // { id: 2, text: 'css', price: 2000 },
  //       // { id: 3, text: 'js', price: 3000 }
  //     ]
  //   }
  // },
  head () {
    return {
      title: '课程列表',
      // vue-meta利⽤hid确定要更新meta
      meta: [
        { name: 'description', hid: 'description', content: 'set pagemeta' }
      ],
      link: [{ rel: 'favicon', href: 'favicon.ico' }]
    }
  }
}
</script>
