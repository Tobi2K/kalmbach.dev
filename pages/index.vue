<template>
  <Header />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style>

.will-change-transform {
  will-change: transform;
}

.jumbotron {
  min-height: 100%;
  background-image: url(./../static/bg.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.cursor::after {
  display: block;
  content: '';
  position: absolute;
  width: 4px;
  height: 100%;
  background-color: #fff;
  animation: cursor 0.6s linear infinite alternate;
  will-change: opacity;
}

@keyframes cursor {
  0%,
  40% {
    opacity: 1;
  }

  60%,
  100% {
    opacity: 0;
  }
}
</style>