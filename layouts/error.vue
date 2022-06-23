<template>
  <div class="w-screen h-screen flex justify-center flex-col font-roboto">
    <div
      class="container max-w-4xl mx-auto flex items-center justify-center flex-col py-16 bg-red-400/50 rounded-md text-center"
    >
      <h1 class="text-6xl mb-3">{{ error.statusCode }}</h1>
      <h1>Oops! Something did not go as planned!</h1>
      <h1>{{ error.message }}.</h1>
      <NuxtLink to="/" class="text-xl mt-5 underline">Home page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  layout: 'error',
  props: { error: { type: Object, required: true } },
}
</script>
