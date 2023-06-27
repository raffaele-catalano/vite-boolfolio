<script>
import '@fortawesome/fontawesome-free/scss/brands.scss';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/regular.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import '@fortawesome/fontawesome-free/scss/v4-shims.scss'

import Header from "./components/Header.vue"
import Main   from "./components/Main.vue"

export default {
  name: 'App',

  components: {
    Header,
    Main,
  }

}
</script>

<template>
  
  <Header/>
  
  <Main/>
  
</template>


<style lang="scss">

@import './scss/main.scss'

</style>
