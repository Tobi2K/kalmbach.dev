<template>
  <div
    class="item-box rounded-lg bg-gray-100 p-4 grid grid-cols-4 item-box-hidden"
  >
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
