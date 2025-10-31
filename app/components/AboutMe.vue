<template>
  <div id="about-me" class="relative items-center pt-0 section-header my-16">
    <div class="container mx-auto sm:px-6 lg:px-8 mt-4">
      <div class="overflow-hidden p-6 shadow rounded">
        <h1 class="text-center font-semibold text-3xl font-sans underline mb-4">
          About Me
        </h1>
        <div class="mb-8">
          <h2 class="text-xl font-semibold text-blue-500 mb-4">
            What do I do?
          </h2>
          <div class="w-full">
            I started coding around 2016 and I am mostly self-taught. I began
            with simple web development and later on branched out into app
            development and data science. I studied Software Engineering (Bachelor of Science) at
            <a class="underline" href="https://www.uni-ulm.de/" target="_blank">
              University Ulm
            </a>
            where I focused on data science as well. I did my Master in Computer Science (Master of Science) at
            <a class="underline" href="https://www.uni-hannover.de/en/">Leibniz University Hannover.</a>
            In Hannover, I am also pursuing my PhD in Computer Science with a focus on interpretability and safety of LLMs.
            <br />
            <br />
            Feel free to take a look at the languages and tools I've used below
            or my <a class="underline" href="#projects">projects</a>.
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 md:gap-10">
          <div class="mb-4 md:mb-0">
            <h2
              class="text-xl font-semibold text-blue-500 mb-4 border-l-4 pl-2"
            >
              Languages
            </h2>
            <div class="grid grid-cols-2 gap-x-4 gap-y-3">
              <ItemBox
                v-for="lang in languages"
                :key="lang.title"
                :link="lang.link"
                :alt="lang.alt"
                :title="lang.title"
              />
            </div>
          </div>
          <div class="mb-4 md:mb-0">
            <h2
              class="text-xl font-semibold text-blue-500 mb-4 border-l-4 pl-2"
            >
              Frameworks
            </h2>
            <div class="grid grid-cols-2 gap-x-4 gap-y-3">
              <ItemBox
                v-for="fw in frameworks"
                :key="fw.title"
                :link="fw.link"
                :alt="fw.alt"
                :title="fw.title"
              />
            </div>
          </div>
          <div class="mb-4 md:mb-0">
            <h2
              class="text-xl font-semibold text-blue-500 mb-4 border-l-4 pl-2"
            >
              Tools
            </h2>
            <div class="grid grid-cols-2 gap-x-4 gap-y-3">
              <ItemBox
                v-for="tool in tools"
                :key="tool.title"
                :link="tool.link"
                :alt="tool.alt"
                :title="tool.title"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { languages, frameworks, tools } from 'assets/data/data'

defineProps({
  info: {
    type: Object,
    required: true
  }
})

const addAnimation = () => {
  let boxes
  let windowHeight
  let windowWidth

  function update() {
    boxes = document.querySelectorAll('.item-box')
    windowHeight = window.innerHeight
    windowWidth = window.innerWidth
  }

  function checkBoxPosition() {
    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i]
      if (isInViewport(box)) {
        box.classList.add('fade-in-box')
        box.classList.remove('item-box-hidden')
      } else if (isOutOfViewport(box)) {
        box.classList.remove('fade-in-box')
        box.classList.add('item-box-hidden')
      }
    }
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (windowHeight + 80 || document.documentElement.clientHeight) &&
      rect.right <= (windowWidth || document.documentElement.clientWidth)
    )
  }

  function isOutOfViewport(element) {
    const rect = element.getBoundingClientRect()
    return (
      rect.top <= -100 ||
      rect.bottom >=
        (windowHeight - rect.height ||
          document.documentElement.clientHeight)
    )
  }

  window.addEventListener('scroll', checkBoxPosition)
  window.addEventListener('resize', update)

  update()
  checkBoxPosition()
}

onMounted(() => {
  addAnimation()
})
</script>
