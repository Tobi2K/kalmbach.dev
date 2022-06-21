<template>
  <div
    id="projects"
    class="relative flex items-top justify-center items-center section-header bg-gray-200 mt-16 pb-16"
  >
    <div class="container mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 overflow-hidden p-6 rounded">
        <h1 class="text-center font-semibold text-3xl font-sans underline">
          Projects
        </h1>
        <div class="grid md:grid-cols-3 md:gap-4 mt-8">
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

export default {
  name: 'MyProjects',
  data() {
    return {
      projects,
    }
  },
}
</script>
