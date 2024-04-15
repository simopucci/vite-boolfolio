<script>
  import axios from 'axios';
  import { api, store } from './store';

  import AppHeader from './components/AppHeader.vue';

    export default {
      data() {
        return {
          title: "Boolfolio",
          store,
        };
      },

      components: { AppHeader },

      created() {
        axios.get(api.baseUrl + 'projects').then((res) => {
          store.projects = res.data.data;
        });
      }

    }
</script>

<template>
  <app-header :title="title" class="ps-5" />

  <div class="container mt-5">
    <div v-for="project in store.projects" class="mb-3 border-bottom">
      <ul>
        <li><strong>ID: </strong>{{ project.id }}</li>
        <li><strong>Title: </strong>{{ project.title }}</li>
        <li><strong>Github Link: </strong>{{ project.github_reference }}</li>
        <li><strong>Description: </strong>{{ project.description }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
  @use '/src/scss/general.scss';
</style>