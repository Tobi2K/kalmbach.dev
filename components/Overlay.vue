<template>
  <div
    id="overlay"
    class="fixed h-screen w-screen grid justify-items-center items-center place-items-center"
  >
    <svg
      width="140"
      height="140"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      class="animate-spin"
    >
      <path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
      />
      <path
        d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'LoadingOverlay',
  mounted() {
    if (document.readyState !== 'loading') {
      this.loading()
    } else {
      document.addEventListener('DOMContentLoaded', this.loading(), false)
    }
  },
  methods: {
    loading() {
      setTimeout(function () {
        document.getElementById('overlay').classList.add('hidden')

        const waveList = document.getElementById('wave').classList
        setTimeout(function () {
          waveList.add('animate-wave')
          setTimeout(function () {
            waveList.remove('animate-wave')
          }, 1000)
        }, 500)
      }, 1000)
    },
  },
}
</script>
