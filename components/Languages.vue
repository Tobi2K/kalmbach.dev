<template>
  <div
    id="language"
    class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0"
  >
    <div class="container max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 overflow-hidden p-6 shadow bg-slate-500/50 rounded">
        <header class="mb-16 group">
          <h2 class="text-2xl font-semibold">My Languages</h2>
        </header>
        <div class="w-full">
          <div class="grid grid-cols-4 gap-4 mt-3">
            <div class="mx-auto">
              <img src="~/assets/img/html5.png" alt="HTML" width="50px" />
            </div>
            <div class="col-span-3">6 Years</div>
          </div>
          <div class="grid grid-cols-4 gap-4 mt-3">
            <div class="mx-auto">
              <img src="~/assets/img/css3.png" alt="HTML" width="50px" />
            </div>
            <div class="col-span-3">6 Years</div>
          </div>
          <div class="grid grid-cols-4 gap-4 mt-3">
            <div class="mx-auto"></div>
            <div class="col-span-3">6 Years</div>
          </div>
          <div class="grid grid-cols-4 gap-4 mt-3">
            <div class="mx-auto"></div>
            <div class="col-span-3">6 Years</div>
          </div>
          <div class="grid grid-cols-4 gap-4 mt-3">
            <div class="mx-auto"></div>
            <div class="col-span-3">6 Years</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLanguages',
}
</script>
