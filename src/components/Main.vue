<script>
import Home     from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'

export default {
    name: 'Main',

    components: {
        Home,
        Projects,
    }
}
</script>

<template>
    
    <main>
        <router-view></router-view>
    </main>

</template>


<style lang="scss" scoped>



</style>