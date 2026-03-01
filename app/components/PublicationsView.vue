<template>
  <div
    id="publications"
    class="relative flex items-top justify-center items-center section-header bg-gray-200 mt-16 pb-16"
  >
    <div class="container mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 overflow-hidden p-6 rounded">
        <h1 class="text-center font-semibold text-3xl font-sans underline">
          Publications
        </h1>
        <div class="mt-8 mx-auto">
          <PublicationsCard
            v-for="paper in publications"
            :key="paper.title"
            :paper="paper"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { publications } from 'assets/data/data'
</script>

