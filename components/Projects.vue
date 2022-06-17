<template>
  <div
    id="projects"
    class="relative flex items-top justify-center sm:items-center section-header bg-gray-200 py-16"
  >
    <div class="container mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 overflow-hidden p-6 rounded">
        <h1 class="text-center font-semibold text-3xl font-sans underline">
          Projects
        </h1>
        <div class="grid grid-cols-3 gap-4 mt-8">
          <Card :info="info" />
          <Card :info="info" />
          <Card
            v-for="project in projects"
            :key="project.title"
            :info="project"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from '~/assets/data/data'

const x = ['/css3.png', '/html5.png']

const info = {
  title: 'Test',
  desc: 'This is a good project',
  images: x,
}

export default {
  name: 'MyProjects',
  data() {
    return {
      info,
      projects,
    }
  },
}
</script>
