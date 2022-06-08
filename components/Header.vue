<template>
  <div
    class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0 jumbotron"
  >
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="container max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 text-white overflow-hidden p-6">
        <header class="mb-16 group">
          <h1 class="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
            Hi,<br class="block md:hidden" />
            <span
              class="inline-flex h-20 -ml-6 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
            >
              I'm Tobi 👋
            </span>
            <span
              class="box-border inline-block w-1 h-10 -ml-6 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"
            ></span>
          </h1>
        </header>
        <h2 class="text-2xl leading-7 font-semibold">
          This is my personal website
        </h2>
        <p class="mt-3">
          I have been coding since 2016. I hope to inspire you with some of my
          projects.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderJumbotron',
}
</script>
