<script>
    import { api, store } from '../store';
    import axios from 'axios';

    import ProjectCard from './ProjectCard.vue';

    export default {
        data() {
            return {               
                store,
            };
        },

        components: { ProjectCard },

        created() {
            axios.get(api.baseUrl + 'projects').then((res) => {
                store.projects = res.data.data;
            });
        },
    };
</script>

<template>
    
    <div class="row row-cols-4 g-3">
        <project-card v-for="project in store.projects" :project="project"></project-card>
        
    </div>


</template>

<style lang="scss">

</style>