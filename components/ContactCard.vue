<template>
  <div class="col-span-10 md:col-span-6 px-6 md:border-r-2">
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
</template>

<script>
export default {
  name: 'ContactCard',
  data() {
    return {
      fullName: '',
      email: '',
      comment: '',
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
  },
  methods: {
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
