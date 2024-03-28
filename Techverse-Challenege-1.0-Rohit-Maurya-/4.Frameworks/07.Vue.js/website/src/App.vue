<template>
  <div id="app">
    <router-view /> <!-- If you're using Vue Router -->
    <!-- Or you can directly include the index.vue component -->
    <index />
  </div>
</template>

<script>
import Index from './components/index.vue' // Import the index.vue component

export default {
  name: 'App',
  components: {
    Index // Register the index.vue component
  }
}
</script>

<style>
/* Add global styles for App.vue */
</style>
