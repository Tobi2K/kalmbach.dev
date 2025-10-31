import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons' // All solid icons
import { far } from '@fortawesome/free-regular-svg-icons' // All regular icons
import { fab } from '@fortawesome/free-brands-svg-icons' // All brand icons

// Add all icons (or cherry-pick specific ones)
library.add(fas, far, fab)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FAIcon', FontAwesomeIcon)
})
