<template>
  <div id="app">
    <router-view />
    <Auth />
  </div>
</template>

<script>
import Auth from '@/components/AuthenticationForm.vue';

export default {
  components: {
    Auth,
  },
};
</script>

<style>

</style>
