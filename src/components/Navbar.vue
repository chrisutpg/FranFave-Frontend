<template>
  <div>
    <v-toolbar app
    color="primary" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-if="!authenticated" flat @click='login()'>Login / Sign Up</v-btn>
        <v-btn v-if="authenticated" flat @click='logout()'>Sign Out</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <nav class="navbar navbar-dark bg-dark">
      <a href="#" class="navbar-brand">Auth0 with Vue and Vuex Example</a>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <button v-if="!authenticated" class="btn btn-primary" @click='login()'>Sign In</button>

        </li>
      </ul>
    </nav>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Header',

  methods: mapActions(['login', 'logout']),

  computed: mapGetters(['authenticated'])
}
</script>
