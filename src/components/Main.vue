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
    <div class="container bg-dark text-light">
        <h1 class="text-warning">Project List:</h1>
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