<template>
  <div>
    <Overlay />
    <Nav />
    <Header />
    <AboutMe />
    <Projects />
    <Contact />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab)

/* add font awesome icon component */
Vue.component('FAIcon', FontAwesomeIcon)

Vue.config.productionTip = false

export default Vue.extend({
  name: 'IndexPage',
})
</script>
