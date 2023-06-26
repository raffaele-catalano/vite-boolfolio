<script>

import {store} from './data/store.js'
import axios from 'axios';

export default {
  name: 'App',
  methods: {
    getApi(){
      axios.get(store.apiUrl + 'projects')
        .then(results => {
          console.log(results.data);
        })
    }
  },
  mounted(){
    this.getApi();
  }
}
</script>

<template>
  <div class="container bg-dark">
    <h1 class="text-warning">Test</h1>
  </div>
</template>


<style lang="scss">

</style>
