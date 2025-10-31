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
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            :info="project"
          />
        </div>
        <br>
        <h3 class="text-center font-semibold text-2xl font-sans underline">
          Other Projects
        </h3>
        <h3 class="text-center text-md font-sans">
          These projects are some smaller or non-public projects.
        </h3>
        <div class="grid md:grid-cols-3 md:gap-4 mt-8">
          <ProjectCard
            v-for="project in projectsOther"
            :key="project.title"
            :info="project"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { projects, projectsOther } from 'assets/data/data'

</script>
