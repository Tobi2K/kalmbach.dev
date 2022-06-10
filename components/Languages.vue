<template>
  <div
    class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0"
  >
    <div class="container max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 overflow-hidden p-6 shadow">
        <header class="mb-16 group">
          <h2 class="text-2xl font-semibold">My Languages</h2>
        </header>
        <table
          class="table-auto border border-slate-500 w-full border-collapse"
        >
          <tr>
            <th class="border">Language</th>
            <th class="border">Experience</th>
          </tr>
          <tr>
            <td class="border">HTML & CSS</td>
            <td class="border">6 Years</td>
          </tr>
          <tr>
            <td class="border">Javascript</td>
            <td class="border">5 Years</td>
          </tr>
          <tr>
            <td class="border">TypeScript</td>
            <td class="border">3 Years</td>
          </tr>
          <tr>
            <td class="border">Python</td>
            <td class="border">2 Years</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLanguages',
}
</script>
