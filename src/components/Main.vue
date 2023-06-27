<script>
import axios from 'axios';
import {store} from '../data/store.js';

export default {
    name: 'Main',

    data() {
        return {
            store,
            projects: []
        }
    },

    methods: {
        getApi() {
            axios.get(store.apiUrl + 'projects')
                .then(results => {
                    this.projects = results.data;
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
        <h1 class="text-center text-primary fw-bold my-4">
            Welcome to Boolfolio
        </h1>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quidem dignissimos nihil repudiandae quos harum placeat distinctio voluptatum itaque commodi, iusto, eveniet eius. Quisquam labore animi possimus consequuntur dicta iusto maxime numquam debitis cum, nemo, aperiam et! Aperiam itaque labore quia aliquid qui nemo! Fuga facilis voluptas incidunt id itaque dolor doloribus excepturi consequatur? Doloribus sed cumque cum deleniti ipsum explicabo labore magni provident nihil voluptates.</p>
        <div class="gif-container d-flex justify-content-center">
            <img class="w-25" src="https://upload.wikimedia.org/wikipedia/commons/8/81/Portfolio_.gif" alt="portfolio-gif">
        </div>
    </div>
    <div class="container">
        <h1 class="text-primary">Project List:</h1>
        <ul>
            <li
            v-for="project in projects"
            :key="project.id"
            >
                <span>{{ project.name }}</span>
            </li>
        </ul>
    </div>
</template>


<style lang="scss" scoped>



</style>