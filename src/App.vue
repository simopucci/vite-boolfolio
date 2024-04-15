<script>

  import AppHeader from './components/AppHeader.vue';
  import ProjectList from './components/ProjectList.vue';

    export default {
      data() {
        return {
          title: "Boolfolio",
        };
      },

      components: { AppHeader, ProjectList },
    };
</script>

<template>
  <app-header :title="title" class="ps-5"></app-header>

  <div class="container mt-4 pb-5">
    <project-list></project-list>
  </div>
</template>

<style lang="scss">
  @use '/src/scss/general.scss';
</style>