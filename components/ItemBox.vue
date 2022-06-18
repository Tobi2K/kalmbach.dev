<template>
  <div class="item-box rounded-lg bg-gray-100 p-4 grid grid-cols-4">
    <img :key="alt" :src="link" />
    <div class="m-auto col-span-3">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'ItemBox',
  props: {
    link: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.nav-link.active {
  background-color: rgb(59 130 246);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  color: white;
}
</style>
