<template>
  <div class="main-slider">
    <transition-group tag="div" :name="transitionName" class="slides-group">
      <div v-if="show" :key="current" class="slide">
        <img :src="images[current]" class="max-h-full max-w-full" />
        <!-- <img src="/images/project/tadl/web_1.png" class="max-h-full max-w-full" /> -->
        <!-- {{ images[current] }} -->
      </div>
    </transition-group>
    <button
      v-if="images.length > 1"
      class="slider-btn slider-btn-prev"
      aria-label="Previous slide"
      @click="slide(-1)"
    >
      <span>&#10094;</span>
    </button>
    <button
      v-if="images.length > 1"
      class="slider-btn slider-btn-next"
      aria-label="Next slide"
      @click="slide(1)"
    >
      <span>&#10095;</span>
    </button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const current = ref(0)
const direction = ref(1)
const transitionName = ref('')
const show = ref(false)
const interval = ref(null)

onMounted(() => {
    show.value = true
    interval.value = createSlidingInterval()
})


const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
})

const slide = (dir) => {
  direction.value = dir
  dir === 1
    ? (transitionName.value = 'slide-next')
    : (transitionName.value = 'slide-prev')
  const len = props.images.length
  current.value = (current.value + (dir % len) + len) % len
  clearInterval(interval)
  interval.value = createSlidingInterval()
}
const createSlidingInterval = () => {
  return setInterval(() => {
    slide(1)
  }, 5000)
}
</script>
