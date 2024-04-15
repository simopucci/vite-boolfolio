<script>
    import { api, store } from '../store';
    import axios from 'axios';

    import ProjectCard from './ProjectCard.vue';

    export default {
        data() {
            return {               
                store,
                pagination: [],
            };
        },

        methods: {
            fetchProjects(endpoint = api.baseUrl + 'projects') {
                axios.get(endpoint).then((res) => {
                    store.projects = res.data.data;
                    this.pagination = res.data.links;
                });
            },
        },

        components: { ProjectCard },

        created() {
            this.fetchProjects();
        },
    };
</script>

<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li @click="fetchProjects(link.url)" :class="{ active: link.active, disabled: !link.url, }" v-for="link in pagination" class="page-item">
                <a class="page-link" href="#" v-html="link.label"></a>
            </li>
        </ul>
    </nav>

    <div class="row row-cols-4 g-3">
        <project-card v-for="project in store.projects" :project="project"></project-card>
    </div>
        
</template>

<style lang="scss">

</style>