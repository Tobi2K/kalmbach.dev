<template>
  <div
    class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0 jumbotron"
  >
    <div class="container max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 text-white overflow-hidden p-6">
        <header class="mb-16 group">
          <h1 class="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
            Hi,<br class="block md:hidden" />
            <span
              class="inline-flex h-20 -ml-6 pt-2 overflow-x-hidden animate-type whitespace-nowrap text-brand-accent will-change-transform"
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

        <div class="text-fader">
          <div class="text-content">
            <span class="line">
              <FAIcon icon="fa-brands fa-html5" />
            </span>
          </div>

          <div class="text-content">
            <span class="line">
              <FAIcon icon="fa-brands fa-css3-alt" />
            </span>
          </div>

          <div class="text-content">
            <span class="line">
              <FAIcon icon="fa-brands fa-js" />
            </span>
          </div>

          <div class="text-content">
            <span class="line">
              <FAIcon icon="fa-brands fa-node" />
            </span>
          </div>

          <div class="text-content">
            <span class="line">
              <FAIcon icon="fa-brands fa-python" />
            </span>
          </div>

          <div class="text-content">
            <span class="line">
              <FAIcon icon="fa-brands fa-vuejs" />
            </span>
          </div>

          <div class="text-content">
            <span class="line">
              ...
            </span>
          </div>
        </div>
      </div>
    </div>
    <button class="scroll-arrow" @click="scrollDown()">
      <img src="~/assets/img/arrow.svg" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'HeaderJumbotron',
  mounted() {
    const list = document.getElementsByClassName('text-content')
    const textFaderDelay = 3000
    const textFaderAnimationSpeed = 500
    function nextText(index) {
      let hasNext = false

      if (index < list.length - 1) {
        hasNext = true
      }

      setTimeout(function () {
        list.item(index).classList.remove('in')
        list.item(index).classList.add('out')
        setTimeout(function () {
          list.item(index).classList.remove('out')
          if (hasNext) {
            list.item(index + 1).classList.add('in')
            nextText(index + 1)
          } else {
            list.item(0).classList.add('in')
            nextText(0)
          }
        }, textFaderAnimationSpeed)
      }, textFaderDelay)
    }
    nextText(0)
  },
  methods: {
    scrollDown() {
      document.getElementById('language').scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style scoped>
.scroll-arrow {
  position: absolute;
  margin: auto;
  bottom: 5%;
  width: 30px;
  height: 30px;
  animation: move 1s infinite alternate;
}

.scroll-arrow svg {
  display: block !important;
  margin: auto;
}

@keyframes move {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-15px);
  }
}

.text-fader .text-content {
  font-size: 2em;
  font-weight: bold;
  color: #fff;
}

.text-fader .text-content span.line {
  opacity: 0;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  animation-duration: 0.8s;
  display: none;
}

.text-fader .text-content.in span.line {
  animation-name: textFaderIn;
  display: block;
}

.text-fader .text-content.out span.line {
  animation-name: textFaderOut;
  display: block;
}

@keyframes textFaderIn {
  from {
    opacity: 0;
    transform: translateY(25%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes textFaderOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-25%);
  }
}
</style>
