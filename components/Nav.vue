<template>
  <header
    class="absolute bg-transparent shadow-sm z-10 w-full px-5 py-2 flex justify-between items-center"
  >
    <router-link to="/" class="text-2xl text-white">kalmbach.dev</router-link>
    <div>
      <a
        href="https://github.com/Tobi2K"
        target="_blank"
        class="text-white px-3 rounded py-1 text-3xl"
      >
        <FAIcon icon="fa-brands fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/tobiaskalmbach/"
        target="_blank"
        class="text-white px-3 rounded py-1 text-3xl"
      >
        <FAIcon icon="fa-brands fa-linkedin" />
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
