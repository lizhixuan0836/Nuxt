<template>
  <div>
    <h2>商品列表</h2>
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
  data () {
    return {
      goods: [
        { id: 1, text: 'html', price: 1000 },
        { id: 2, text: 'css', price: 2000 },
        { id: 3, text: 'js', price: 3000 }
      ]
    }
  }
}
</script>
