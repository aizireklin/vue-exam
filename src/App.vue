<template>
  <v-app>
    <TheHeader />
    <v-main>
      <router-view />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
  data: () => ({
    //
  }),
}
</script>
