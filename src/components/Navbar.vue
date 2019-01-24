<template>
  <nav class="navbar navbar-dark bg-dark">
    <a href="#" class="navbar-brand">Auth0 with Vue and Vuex Example</a>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <button v-if="!authenticated" class="btn btn-primary" @click='login()'>Sign In</button>
        <a v-if="authenticated" href="#" class='nav-link' @click='logout()'>Log Out</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Header',

  methods: mapActions(['login', 'logout']),

  computed: mapGetters(['authenticated'])
}
</script>
