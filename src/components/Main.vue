<script>
import axios from 'axios';
import {store} from '../data/store.js';

import Card from './partials/Card.vue'

export default {
    name: 'Main',

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
    <main>
        <div class="jumbotron container my-3">
            <h1 class="text-center text-primary fw-bold my-4">
                Welcome to Boolfolio
            </h1>
    
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quidem dignissimos nihil repudiandae quos harum placeat distinctio voluptatum itaque commodi, iusto, eveniet eius. Quisquam labore animi possimus consequuntur dicta iusto maxime numquam debitis cum, nemo, aperiam et! Aperiam itaque labore quia aliquid qui nemo!</p>
            <div class="gif-container d-flex justify-content-center">
                <img class="w-25" src="https://upload.wikimedia.org/wikipedia/commons/8/81/Portfolio_.gif" alt="portfolio-gif">
            </div>
        </div>
    
        <div class="container">
                <div class="row row-cols-5 py-2">
                    <Card
                    v-for="project in projects"
                    :key="project.id"
                    :title="project.name"
                    :type="project.type.name"
                    :technologies="project.technologies"
                    :status="project.is_closed"/>
                </div>
        </div>
    </main>

</template>


<style lang="scss" scoped>



</style>