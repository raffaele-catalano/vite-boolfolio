<script>
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"

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
