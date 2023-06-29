<script>
import axios from 'axios';
import {store} from '../data/store.js';

import Card from '../components/partials/Card.vue'

export default {
    name: 'Projects',

    components: {
        Card,
    },
    
    data() {
        return {
            store,
            projects: [],
            results: []
        }
    },

    methods: {
        getApi() {
            axios.get(store.apiUrl + 'projects')
            
                .then(results => {

                    this.projects = results.data;
                    this.results = results.data;

                    console.log(this.projects);
                    console.log(results.data);
                })
        }
    },


    mounted() {
        this.getApi();
    }

}
</script>

<template>
    <div class="container my-3">
        <h2 class="text-center text-primary fw-bold">Projects List</h2>
        <p class="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque numquam illum optio sunt praesentium iste, dolores obcaecati veritatis impedit sapiente ab autem voluptates mollitia quisquam minus repudiandae quidem, animi placeat.</p>
        <div class="row row-cols-4 py-2">
            <Card
            v-for="project in projects"
            :key="project.id"
            :title="project.name"
            :type="project.type.name"
            :technologies="project.technologies"
            :status="project.is_closed"
            :slug="project.slug"
            />
        </div>
    </div>
</template>

<style>

</style>