<template>
  <div class="authenticating">
    Authenticating...
  </div>
</template>

<script>
import router from '@/router'
import { mapActions } from 'vuex'

export default {
  name: 'Auth',

  methods: mapActions(['handleAuthentication', 'login']),

  data () {
    this.handleAuthentication().then(() => {
      router.push({ name: 'home' })
    }).catch(err => {
      // some meaningful error handling here ...
      console.error(err)
    })

    return {}
  }
}
</script>
