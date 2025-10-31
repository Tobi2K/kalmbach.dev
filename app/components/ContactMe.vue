<template>
  <div
    id="contact"
    class="relative flex items-top justify-center py-16 sm:items-center section-header"
  >
    <div class="container max-w-2xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="mt-8 overflow-hidden p-6 shadow rounded">
        <header class="mb-8 group">
          <h2 class="text-2xl font-semibold">Contact me</h2>
        </header>
        <div class="grid grid-cols-10">
          <SocialsList />
        </div>
      </div>
    </div>
    <div
      id="loader"
      class="absolute inset-0 flex items-center justify-center hidden"
    >
      <div class="max-w-sm p-6 bg-white shadow-xl rounded-xl">
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="4" width="6" height="14" opacity="1">
            <animate
              id="a"
              begin="0;b.end-0.25s"
              attributeName="opacity"
              dur="0.75s"
              values="1;.2"
              fill="freeze"
            />
          </rect>
          <rect x="9" y="4" width="6" height="14" opacity=".4">
            <animate
              begin="a.begin+0.15s"
              attributeName="opacity"
              dur="0.75s"
              values="1;.2"
              fill="freeze"
            />
          </rect>
          <rect x="17" y="4" width="6" height="14" opacity=".3">
            <animate
              id="b"
              begin="a.begin+0.3s"
              attributeName="opacity"
              dur="0.75s"
              values="1;.2"
              fill="freeze"
            />
          </rect>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
