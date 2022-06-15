<template>
  <div
    id="home"
    class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0 jumbotron section-header"
  >
    <div class="container max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 text-white overflow-hidden p-6 grid grid-cols-12">
        <div class=" col-span-10">
          <header class="mb-16 group">
            <h1 class="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
              Hi,<br class="block md:hidden" />
              <span
                class="inline-flex h-20 -ml-6 pt-2 overflow-x-hidden animate-type whitespace-nowrap will-change-transform"
              >
                I'm Tobi 👋
              </span>
              <span
                class="box-border inline-block w-1 h-10 -ml-6 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"
              ></span>
            </h1>
          </header>
          <h2 class="text-2xl leading-7 font-semibold">
            I'm a more-or-less Full-Stack Developer.
          </h2>
          <p class="mt-3">
            Currently, I'm studying Software Engineering in Southern Germany.
            <br />
            I'm intereseted in Data Science and Theoretical Computer Science.
          </p>
        </div>

        <div class="icon-list flex justify-center align-middle">
          <div class="single-icon in">
            <span>
              <FAIcon icon="fa-brands fa-html5" />
            </span>
          </div>

          <div class="single-icon">
            <span>
              <FAIcon icon="fa-brands fa-css3-alt" />
            </span>
          </div>

          <div class="single-icon">
            <span>
              <FAIcon icon="fa-brands fa-js" />
            </span>
          </div>

          <div class="single-icon">
            <span>
              <FAIcon icon="fa-brands fa-node" />
            </span>
          </div>

          <div class="single-icon">
            <span>
              <FAIcon icon="fa-brands fa-python" />
            </span>
          </div>

          <div class="single-icon">
            <span>
              <FAIcon icon="fa-brands fa-vuejs" />
            </span>
          </div>

          <div class="single-icon">
            <span> ... </span>
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
    const list = document.getElementsByClassName('single-icon')
    const timePerItem = 3500
    const timeBetweenItems = 500
    function nextItem(index) {
      let isNotLast = false

      if (index !== list.length - 1) {
        isNotLast = true
      }

      setTimeout(function () {
        list.item(index).classList.remove('in')
        list.item(index).classList.add('out')
        setTimeout(function () {
          list.item(index).classList.remove('out')
          if (isNotLast) {
            list.item(index + 1).classList.add('in')
            nextItem(index + 1)
          } else {
            list.item(0).classList.add('in')
            nextItem(0)
          }
        }, timeBetweenItems)
      }, timePerItem)
    }
    nextItem(0)
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

.icon-list .single-icon {
  font-size: 3em;
  font-weight: bold;
  position: relative;
  top: 25%;
}

.icon-list .single-icon span {
  opacity: 0;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  animation-duration: 1s;
  display: none;
}

.icon-list .single-icon.in span {
  animation-name: fadeIn;
  display: block;
}

.icon-list .single-icon.out span {
  animation-name: fadeOut;
  display: block;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(25%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
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
