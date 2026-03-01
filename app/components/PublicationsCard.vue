<template>
  <div class="container max-w-4xl mx-auto shadow-lg p-4 rounded-md bg-slate-100 relative mb-5">
    <h1 class="font-semibold text-xl font-sans">{{ paper.title }} <span class="text-base">({{ paper.year }})</span></h1>
    <hr>
    <p class="text-sm">Published in {{ paper.venue }}</p>
    <br>
    <p><b>Authors</b>: {{ paper.authors }}</p>
    <br>
    <div>
      <b>Paper summary</b>: <span v-if="showSummary">
        {{ paper.summary }}<br>
      </span><button class="text-slate-500" @click="showSummary = !showSummary">
        {{ showSummary ? ' Show Less' : 'Show Summary' }}
      </button>
    </div>
    <br>
    <div>
      <b>Citation</b>: <span v-if="showCitation">
        <div class="copy-box">
          <pre>{{ paper.citation }}</pre>
          <button @click="copyText(paper.citation)">{{ copied ? 'Copied!' : 'Copy' }}</button>
        </div>
      </span><button class="text-slate-500" @click="showCitation = !showCitation">
        {{ showCitation ? ' Show Less' : 'Show Citation' }}
      </button>
    </div>
    <br>
    <a class="font-semibold text-lg font-sans underline" :href="paper.url" target="_blank">Paper Link</a>
  </div>
</template>

<script setup>
defineProps({
  paper: {
    type: Object,
    required: true
  }
})


const showSummary = ref(false)
const showCitation = ref(false)

const copied = ref(false)

async function copyText(text) {
  await navigator.clipboard.writeText(text)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}

</script>

<style scoped>
.copy-box {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1rem;
}

pre {
  margin: 0;
  flex: 1;
  white-space: pre-wrap;
  font-family: monospace;
}
</style>

