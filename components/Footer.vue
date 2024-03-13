<template>
  <footer
    class="relative shadow-2xl z-10 bottom-0 w-full px-5 py-2 grid justify-items-center items-center bg-gray-200"
  >
    <div class="text-center">
      <span
        >Made with <FAIcon icon="fa-solid fa-heart" style="color: #e25555" /> by
        Tobi
      </span>
      <br />
      <span
        >With the help of
        <a class="underline" href="https://nuxtjs.org/" target="_blank"
          >NuxtJS
        </a>
        &
        <a class="underline" href="https://tailwindcss.com/" target="_blank"
          >tailwind
        </a>
      </span>
      <br />
      <span>
        <a href="https://kalmbach.dev/privacy.html">Privacy Policy</a> | <a href="https://kalmbach.dev/imprint.html">Imprint</a>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
}
</script>
