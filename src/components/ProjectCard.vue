<script>
    export default {
        props: {
            project: Object,
        },

        computed: {
            abstract() {
                const description = this.project.description
                return description.length > 50 ? description.substr(0, 50) + '...' : description;
            }
        }
    }
</script>

<template>
    <div class="col">
            <div class="card h-100">
                <img v-if="project.image" :src="project.image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ abstract }}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
</template>

<style lang="scss">

</style>