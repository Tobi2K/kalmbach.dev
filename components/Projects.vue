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
          <Card title="test" desc="This is a project about stuff." :images="x" />
          <Card title="test" desc="This is a project about stuff." :images="x" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const x = [
  '/css3.png',
  '/html5.png',
]

export default {
  name: 'MyProjects',
  data() {
    return {
      x
    }
  }
}
</script>
