<template>
  <div class="shadow-lg p-4 rounded-md">
    <h4 class="text-center font-light text-xl mb-4">{{ title }}</h4>
    <Slider v-if="images.length !== 0" :images="images" />
    <p class="mt-4">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: {
        type: String,
        default: "Project"
    },
    desc: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        default: () => ([]),
    }
  },
}
</script>
