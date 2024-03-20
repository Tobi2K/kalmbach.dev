<template>
  <div
    id="home"
    class="relative flex items-center justify-center min-h-screen sm:items-center sm:pt-0 jumbotron section-header"
  >
    <div class="container max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 text-white overflow-hidden p-6 grid grid-cols-12">
        <div class="col-span-12 md:col-span-10">
          <header class="mb-16 group">
            <h1 class="mb-1 text-4xl text-gray-100 md:text-6xl">
              <span class="inline-flex pt-2 h-20">
                Hi
                <span id="wave" class="ml-3 animate-wave-hover"> 👋 </span>
              </span>
              <br />
              <span> My name is Tobi </span>
            </h1>
          </header>
          <h2 class="text-2xl leading-7 font-semibold">
            I'm a more-or-less Full-Stack Developer.
          </h2>
          <p class="mt-3">
            Currently, I'm studying Computer Science in Germany.
            <br />
            I'm intereseted in everything Data Science, Machine Learning and Theoretical Computer Science.
          </p>
          <div class="mt-4">
            <a
              href="mailto:t.kalmbach35@gmail.com"
              class="px-3 rounded py-1 text-3xl"
            >
              <FAIcon icon="fa-solid fa-envelope" />
            </a>
            <a
              href="https://github.com/Tobi2K"
              target="_blank"
              class="px-3 rounded py-1 text-3xl"
            >
              <FAIcon icon="fa-brands fa-github" />
            </a>
            <a
              href="https://stackoverflow.com/users/8338614/tobi2k"
              target="_blank"
              class="px-3 rounded py-1 text-3xl"
            >
              <FAIcon icon="fa-brands fa-stack-overflow" />
            </a>
            <a
              href="https://www.linkedin.com/in/tobiaskalmbach/"
              target="_blank"
              class="px-3 rounded py-1 text-3xl"
            >
              <FAIcon icon="fa-brands fa-linkedin" />
            </a>
          </div>
        </div>

        <div
          class="icon-list justify-center items-center col-span-2 hidden md:flex"
        >
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
        </div>
      </div>
    </div>
    <button class="scroll-arrow animate-bounce" @click="scrollDown()">
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
      const element = document.getElementById('about-me')
      const topOfElementWithOffset =
        element.getBoundingClientRect().top + window.pageYOffset - 50

      window.scrollTo({
        top: topOfElementWithOffset,
        behavior: 'smooth',
      })
    },
  },
}
</script>
