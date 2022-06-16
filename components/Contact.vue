<template>
  <div
    id="contact"
    class="relative flex items-top justify-center py-16 sm:items-center section-header"
  >
    <div class="container max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 overflow-hidden p-6 shadow rounded">
        <header class="mb-8 group">
          <h2 class="text-2xl font-semibold">Contact me</h2>
        </header>
        <div class="grid grid-cols-10">
          <div class="col-span-6 px-6 border-r-2">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Full name</span>
                <input
                  id="fullName"
                  v-model="fullName"
                  type="text"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="John Doe"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Email address</span>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="john@example.com"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">What can I help you with?</span>
                <textarea
                  id="comment"
                  v-model="comment"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows="3"
                  placeholder=""
                ></textarea>
              </label>
              <div class="grid grid-cols-2">
                <span
                  class="grid justify-items-end items-center text-xl tabular-nums pr-4"
                  >{{ equation }} =</span
                >
                <label class="block">
                  <input
                    id="answer"
                    v-model="answer"
                    type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Answer"
                  />
                </label>
              </div>
            </div>
            <button
              class="mt-4 float-right px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
              @click="submit()"
            >
              Send Request
              <FAIcon class="ml-1" icon="fa-solid fa-paper-plane" />
            </button>
          </div>
          <div class="col-span-4 px-6">
            <h2 class="text-xl text-center mb-4">General Information</h2>
            <hr>
            <div class="grid grid-cols-10">
              <div class="col-span-2 grid justify-items-center items-center" style="aspect-ratio: 1/1;">
                <FAIcon class="rounded-full bg-gray-200 p-2" icon="fa-solid fa-envelope" />
              </div>
              <div class="col-span-8 grid items-center pl-2">
                <a href="mailto:t.kalmbach35@gmail.com">t.kalmbach35@gmail.com</a>
              </div>
            </div>
            <div class="grid grid-cols-10">
              <div class="col-span-2 grid justify-items-center items-center" style="aspect-ratio: 1/1;">
                <FAIcon class="rounded-full bg-gray-200 p-2" icon="fa-brands fa-github" />
              </div>
              <div class="col-span-8 grid items-center pl-2">
                <a href="https://github.com/Tobi2K" target="_blank">Tobi2K</a>
              </div>
            </div>
            <div class="grid grid-cols-10">
              <div class="col-span-2 grid justify-items-center items-center" style="aspect-ratio: 1/1;">
                <FAIcon class="rounded-full bg-gray-200 p-2" icon="fa-brands fa-stack-overflow" />
              </div>
              <div class="col-span-8 grid items-center pl-2">
                <a href="https://stackoverflow.com/users/8338614/tobi2k" target="_blank">Tobi2K</a>
              </div>
            </div>
            <div class="grid grid-cols-10">
              <div class="col-span-2 grid justify-items-center items-center" style="aspect-ratio: 1/1;">
                <FAIcon class="rounded-full bg-gray-200 p-2" icon="fa-brands fa-linkedin" />
              </div>
              <div class="col-span-8 grid items-center pl-2">
                <a href="https://www.linkedin.com/in/tobiaskalmbach/" target="_blank">tobiaskalmbach</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactMe',
  data() {
    return {
      fullName: '',
      email: '',
      comment: '',
      equation: '',
      answer: null,
      correct: 0,
    }
  },
  watch: {
    fullName() {
      this.removeClasses('fullName')
    },
    email() {
      this.removeClasses('email')
    },
    comment() {
      this.removeClasses('comment')
    },
    answer() {
      this.removeClasses('answer')
    },
  },
  mounted() {
    this.equation = this.generateEquation()
  },
  methods: {
    generateEquation() {
      const number1 = Math.floor(Math.random() * 10) + 1
      const number2 = Math.floor(Math.random() * 10) + 1
      this.correct = number1 + number2
      return number1 + ' + ' + number2
    },
    removeClasses(id) {
      document
        .getElementById(id)
        .classList.remove(
          'border-red-300',
          'ring',
          'ring-red-200',
          'ring-opacity-100'
        )
    },
    editClasses(id) {
      const elementList = document.getElementById(id).classList
      elementList.add(
        'border-red-300',
        'ring',
        'ring-red-200',
        'ring-opacity-100',
        'animate-missing-field'
      )
      setTimeout(() => {
        elementList.remove('animate-missing-field')
      }, 500)
    },
    submit() {
      let filled = true
      if (this.fullName === '') {
        filled = false
        this.editClasses('fullName')
      }
      if (this.email === '') {
        filled = false
        this.editClasses('email')
      }
      if (this.comment === '') {
        filled = false
        this.editClasses('comment')
      }
      if (this.correct !== Number(this.answer)) {
        filled = false
        this.editClasses('answer')
      }
      if (filled) {
        const information = {
          name: this.fullName,
          email: this.email,
          comment: this.comment,
        }

        fetch('https://api.kalmbach.dev/mail', {
          method: 'POST',
          body: JSON.stringify(information),
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          mode: 'cors',
        }).then((val) => {
          if (!val.ok) {
            throw new Error(`Request failed with status ${val.status}`)
          }
        })
      }
    },
  },
}
</script>

<style scoped>
.animate-missing-field {
  animation: popup 0.5s;
}

@keyframes popup {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>
