<template>
  <div
    class="shadow-lg p-4 rounded-md bg-slate-100 relative mb-5 md:mb-0 flex flex-col"
  >
    <h4 class="text-center font-light text-xl mb-4">{{ info.title }}</h4>
    <a
      v-if="info.link"
      class="absolute top-2 right-2"
      :href="info.link"
      target="_blank"
    >
      <FAIcon class="rounded-full bg-white p-2" icon="fa-brands fa-github" />
    </a>
    <SliderImages v-if="info.images.length !== 0" :images="info.images" />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p class="mt-4"><span v-html="info.desc" /></p>
    <ProjectLanguages v-if="info.languages" :languages="info.languages" />
  </div>
</template>

<script setup>
defineProps({
  info: {
    type: Object,
    required: true
  }
})
</script>
