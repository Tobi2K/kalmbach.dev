<template>
  <div class="flex justify-center mt-2 flex-1 items-end">
    <div class=" border-t w-full flex justify-center ">
      <div v-for="lang in languages" :key="lang" class="w-1/3 p-8">
        <img :src="lang" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    languages: {
      type: Array,
      required: true,
    },
  },
}
</script>
