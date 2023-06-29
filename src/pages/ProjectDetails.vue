<script>
import axios from 'axios';
import {store} from '../data/store.js';
import Loader from '../components/partials/Loader.vue'

export default {
    name: 'ProjectDetails',

    components: {
        Loader,
    },

    data() {
        return {
            store,
            loaded:false,
            project: null,
            technologies: [],
        }
    },

    methods:{
        getApi(){
            this.loaded = false;
            axios.get(store.apiUrl + 'projects/details/' + this.$route.params.slug)
                .then(results =>{
                    this.project = results.data;
                    this.loaded = true;
                    console.log(this.project);
                })
        },

    },

    mounted(){
        this.getApi()
    }

}

</script>

<template>
    <Loader v-if="!loaded"/>
    <div v-else class="container my-3">
            <h2 class="text-center my-4">
                <span class="text-primary fw-bold">Project:</span> {{ project.name }}
            </h2>

                                <!-- FIX -->

            <!-- <div class="container d-flex justify-content-center mb-2">
                <img :src=project.image_path class="w-25">
            </div> -->

            <h5>
                <span class="text-primary">Description:</span> <span v-html="project.description"></span>
            </h5>
            <h5>
                <span class="text-primary">Category:</span> {{ project.category }}
            </h5>
            <h5>
                <span class="text-primary">Start Date:</span> {{ project.start_date }}
            </h5>
            <h5>
                <span class="text-primary">End Date:</span> {{ project.end_date }}
            </h5>
            <h5>
                <span class="text-primary">Type:</span> {{ project.type.name }}
            </h5>
            <h5>
                <span class="text-primary">Technologies: </span>
                <span v-for="technology in project.technologies" :key="technology.id" class="badge text-bg-warning me-2">{{ technology.name }}</span>
                <span class="badge text-bg-danger me-2" v-if="!project.technologies.length">Undefined</span>
            </h5>



            <div class="text-center py-3">
                <router-link  class="btn btn-primary" :to="{'name' : 'projects'}">Back to Projects</router-link>
            </div>
    
    </div>
</template>

<style lang="scss" scoped>

</style>