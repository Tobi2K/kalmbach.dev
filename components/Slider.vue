<template>
  <div class="main-slider">
    <transition-group tag="div" :name="transitionName" class="slides-group">
      <div v-if="show" :key="current" class="slide">
        <img :src="images[current]" class="max-h-full max-w-full" />
      </div>
    </transition-group>
    <div
      v-if="images.length > 1"
      class="btn btn-prev"
      aria-label="Previous slide"
      @click="slide(-1)"
    >
      &#10094;
    </div>
    <div
      v-if="images.length > 1"
      class="btn btn-next"
      aria-label="Next slide"
      @click="slide(1)"
    >
      &#10095;
    </div>
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
      transitionName: 'fade',
      show: false,
      slides: [
        { className: 'blue' },
        { className: 'red' },
        { className: 'yellow' },
      ],
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

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Crimson+Text');

/* FADE IN */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}

/* SLIDES CLASSES */

.blue {
  background: #4a69bd;
}

.red {
  background: #e55039;
}

.yellow {
  background: #f6b93b;
}

/* SLIDER STYLES */
body {
  overflow: hidden;
  margin: 0;
  font-size: 50px;
  font-family: 'Crimson Text', sans-serif;
  color: #fff;
}

.main-slider {
  width: 100%;
  aspect-ratio: 1/1;
  position: relative;
  overflow-x: hidden;
}

.slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  z-index: 10;
  cursor: pointer;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  position: absolute;
  top: calc(50% - 15px);
  left: 1%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
}

.btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.1);
}
</style>
