<script>
  import axios from 'axios';

    export default {
      data() {
        return {
          title:"Boolfolio",
          projects: [],
        };
      },

      created() {
        axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
          this.projects = res.data.data
        });
      }

    }
</script>

<template>
  <div class="container mt-5">
    <h1 class="mb-4"> {{ title }}</h1>

    <div v-for="project in projects" class="mb-3 border-bottom">
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