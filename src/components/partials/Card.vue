<script>
export default {
    name: 'Card',

    props:{
    title: String,
    type: String,
    technologies: Array,
    status: Number,
    slug: String
    }
}
</script>

<template>
    <div class="col mb-4">
        <div class="card h-100">
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">{{ title }}</h5>
                <div class="card-subtitle my-2 text-body-secondary">
                    <span class="badge text-bg-primary">{{ type }}</span>
                </div>

                <div class="card-text my-2">
                    <!-- <p>Technologies: </p> -->
                    <span v-for="technology in technologies" :key="technology.id" class="badge text-bg-warning me-2">{{ technology.name }}</span>
                    <span class="badge text-bg-danger me-2" v-if="!technologies.length">Undefined</span>
                </div>

                <div class="card-text my-2">
                    <span class="card-text me-2">Status:</span>
                    <span v-show="status"><i class="fa-solid fa-hourglass-start text-success"></i></span>
                    <span v-show="!status"><i class="fa-solid fa-lock text-danger"></i></span>
                </div>

                <div class="my-2 text-end">
                    <router-link class="btn btn-primary" :to="{name : 'projectdetails', params: {slug: slug}}">Details</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>