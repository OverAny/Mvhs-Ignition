<template>
  <v-toolbar
    app
    flat
  >
    <v-toolbar-side-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />
    <v-container
      mx-auto
      py-0
    >
      <v-layout class="pt-2">
        <v-img
          :src="require('@/assets/logo1.png')"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="$vuetify.goTo(0)"
        />
        <p 
          contain
          height="48"
          width="48"
          max-width="48"

        class="display-1 pt-1">
        
            MVHS Ignition
        </p>
        <v-spacer />

        <v-btn
          :key="Home"
          class="ml-0 hidden-sm-and-down"
          flat
          href="/#home"
        >
          Home
        </v-btn>
        
        <v-btn
          :key="About"
          class="ml-0 hidden-sm-and-down"
          flat
          href="/#about"
        >
          Details
        </v-btn>

        <v-btn
          :key="Join"
          class="ml-0 hidden-sm-and-down"
          flat
          href="https://bit.ly/2FNXRjJ"
        >
          Join the Club!
        </v-btn>  
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations
  } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['links'])
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href)
      }
    }
  }
</script>
