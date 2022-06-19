<template>
  <div
    id="about-me"
    class="relative sm:items-center sm:pt-0 section-header my-16"
  >
    <div class="container mx-auto sm:px-6 lg:px-8 mt-4">
      <div class="overflow-hidden p-6 shadow rounded">
        <h1 class="text-center font-semibold text-3xl font-sans underline">
          About Me
        </h1>
        <div class="mb-8">
          <h2 class="text-xl font-semibold text-blue-500 mb-4">
            What do I do?
          </h2>
          <div class="w-full">
            I started coding around 2016 and I am mostly self-taught. I began
            with simple web development and later on branched out into app
            development and data science. I'm currently studying Software
            Engineering at
            <a class="underline" href="https://www.uni-ulm.de/" target="_blank">
              University Ulm
            </a>
            where I focus on data science as well. <br />
            <br />
            Feel free to take a look at my preferred languages and tools below
            or my <a class="underline" href="#projects">projects</a>.
          </div>
        </div>

        <div class="grid grid-cols-3 gap-10">
          <div>
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
          <div>
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
          <div>
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

<script>
import { languages, frameworks, tools } from '~/assets/data/data'

export default {
  name: 'AboutMe',
  data() {
    return {
      languages,
      frameworks,
      tools,
    }
  },
}
</script>
