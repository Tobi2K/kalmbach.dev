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
            <div class="grid grid-cols-2 py-4">
              <div class="grid justify-items-center items-center m-auto px-2">
                <span class="text-green-600">{{ infoText }}</span>
                <span class="text-red-600">{{ errorText }}</span>
              </div>
              <button
                class="float-right px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
                @click="submit()"
              >
                Send Request
                <FAIcon class="ml-1" icon="fa-solid fa-paper-plane" />
              </button>
            </div>
          </div>
          <div class="col-span-4 px-6">
            <h2 class="text-xl text-center mb-4">General Information</h2>
            <hr />
            <div class="grid grid-cols-10">
              <div
                class="col-span-2 grid justify-items-center items-center"
                style="aspect-ratio: 1/1"
              >
                <FAIcon
                  class="rounded-full bg-gray-200 p-2"
                  icon="fa-solid fa-envelope"
                />
              </div>
              <div class="col-span-8 grid items-center pl-2">
                <a href="mailto:t.kalmbach35@gmail.com"
                  >t.kalmbach35@gmail.com</a
                >
              </div>
            </div>
            <div class="grid grid-cols-10">
              <div
                class="col-span-2 grid justify-items-center items-center"
                style="aspect-ratio: 1/1"
              >
                <FAIcon
                  class="rounded-full bg-gray-200 p-2"
                  icon="fa-brands fa-github"
                />
              </div>
              <div class="col-span-8 grid items-center pl-2">
                <a href="https://github.com/Tobi2K" target="_blank">Tobi2K</a>
              </div>
            </div>
            <div class="grid grid-cols-10">
              <div
                class="col-span-2 grid justify-items-center items-center"
                style="aspect-ratio: 1/1"
              >
                <FAIcon
                  class="rounded-full bg-gray-200 p-2"
                  icon="fa-brands fa-stack-overflow"
                />
              </div>
              <div class="col-span-8 grid items-center pl-2">
                <a
                  href="https://stackoverflow.com/users/8338614/tobi2k"
                  target="_blank"
                  >Tobi2K</a
                >
              </div>
            </div>
            <div class="grid grid-cols-10">
              <div
                class="col-span-2 grid justify-items-center items-center"
                style="aspect-ratio: 1/1"
              >
                <FAIcon
                  class="rounded-full bg-gray-200 p-2"
                  icon="fa-brands fa-linkedin"
                />
              </div>
              <div class="col-span-8 grid items-center pl-2">
                <a
                  href="https://www.linkedin.com/in/tobiaskalmbach/"
                  target="_blank"
                  >tobiaskalmbach</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="loader"
      class="absolute inset-0 flex items-center justify-center hidden"
    >
      <div class="max-w-sm p-6 bg-white shadow-xl rounded-xl">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="140px"
          height="140px"
          viewBox="0 0 40 40"
          class="animate-spin"
        >
          <path
            opacity="0.2"
            fill="#000"
            d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
          />
          <path
            fill="#000"
            d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z"
          />
        </svg>
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
      infoText: '',
      errorText: '',
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
    validateEmail(email) {
      /* eslint-disable no-control-regex */
      const re =
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|\\[\x01-\x09\x0B\x0C\x0E-\x7F])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21-\x5A\x53-\x7F]|\\[\x01-\x09\x0B\x0C\x0E-\x7F])+)\])/
      /* eslint-enable */
      const noRemainder = email.replace(re, '').length === 0

      return re.test(email) && noRemainder
    },
    reset() {
      this.fullName = ''
      this.email = ''
      this.comment = ''
      this.answer = null
      this.equation = this.generateEquation()
    },
    submit() {
      let filled = true
      let emailOk = true
      if (this.fullName === '') {
        filled = false
        this.editClasses('fullName')
      }
      if (this.email === '') {
        filled = false
        this.editClasses('email')
      } else if (!this.validateEmail(this.email)) {
        emailOk = false
        this.editClasses('email')
        this.errorText = 'Your email is invalid'

        setTimeout(() => {
          this.errorText = ''
        }, 2000)
      }
      if (this.comment === '') {
        filled = false
        this.editClasses('comment')
      }
      if (this.correct !== Number(this.answer)) {
        filled = false
        this.editClasses('answer')
      }

      if (filled && emailOk) {
        document.getElementById('loader').classList.remove('hidden')
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
          document.getElementById('loader').classList.add('hidden')
          this.reset()
          if (val.ok) {
            this.infoText = 'Thanks for your request!'

            setTimeout(() => {
              this.infoText = ''
            }, 2000)
          }
          if (!val.ok) {
            throw new Error(`Request failed with status ${val.status}`)
          }
        })
      } else if (!filled) {
        this.errorText = 'Please fill out everything'

        setTimeout(() => {
          this.errorText = ''
        }, 2000)
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
