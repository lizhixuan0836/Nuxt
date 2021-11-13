<template>
  <div>
    <nav>
      <nuxt-link to="/">
        首页
      </nuxt-link>
      <nuxt-link to="/admin" no-prefetch>
        管理
      </nuxt-link>
      <nuxt-link to="/cart">
        购物车
      </nuxt-link>
    </nav>
    <!-- page中定义的内容 -->
    <Nuxt />
  </div>
</template>
