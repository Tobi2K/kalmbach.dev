<template>
  <div class="shadow-lg p-4 rounded-md bg-slate-100 relative">
    <h4 class="text-center font-light text-xl mb-4">{{ info.title }}</h4>
    <a v-if="info.link" class="absolute top-2 right-2" :href="info.link">
      <FAIcon class="rounded-full bg-white p-2" icon="fa-brands fa-github" />
    </a>
    <Slider v-if="info.images.length !== 0" :images="info.images" />
    <p class="mt-4"><span v-html="info.desc" /></p>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    info: {
      type: Object,
      required: true
    }
  },
}
</script>
