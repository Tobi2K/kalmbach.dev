<template>
  <div class="main-slider">
    <transition-group tag="div" :name="transitionName" class="slides-group">
      <div v-if="show" :key="current" class="slide">
        <img :src="images[current]" class="max-h-full max-w-full" />
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

<script>
export default {
  name: 'CustomSlider',
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      current: 0,
      direction: 1,
      transitionName: '',
      show: false,
      interval: null,
    }
  },
  mounted() {
    this.show = true

    this.interval = this.createSlidingInterval()
  },
  methods: {
    slide(dir) {
      this.direction = dir
      dir === 1
        ? (this.transitionName = 'slide-next')
        : (this.transitionName = 'slide-prev')
      const len = this.images.length
      this.current = (this.current + (dir % len) + len) % len
      clearInterval(this.interval)
      this.interval = this.createSlidingInterval()
    },
    createSlidingInterval() {
      return setInterval(() => {
        this.slide(1)
      }, 5000)
    },
  },
}
</script>
