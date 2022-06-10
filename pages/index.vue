<template>
  <div>
  <Header />
  <Languages />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas }  from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Languages from '~/components/Languages.vue'

library.add(fas)

/* add font awesome icon component */
Vue.component('FAIcon', FontAwesomeIcon)

Vue.config.productionTip = false

export default Vue.extend({
  name: 'IndexPage',
  components: { Languages },
})
</script>