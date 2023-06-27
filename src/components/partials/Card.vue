<script>
export default {
    name: 'Card',

    props:{
    title: String,
    type: String,
    technologies: Array,
    status: Number
    }
}
</script>

<template>
    <div class="col mb-4">
        <div class="card h-100">
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">{{ title }}</h5>
            <div class="card-subtitle mb-2 text-body-secondary">
                <span class="badge text-bg-primary">{{ type }}</span>
            </div>

            <div class="card-text">
                <!-- <p>Technologies: </p> -->
                <span v-for="technology in technologies" :key="technology.id" class="badge text-bg-warning me-2">{{ technology.name }}</span>
                <span class="badge text-bg-danger me-2" v-if="!technologies.length">Undefined</span>
            </div>

            <div class="card-text">
                <span class="card-text me-2">Status:</span>
                <span v-show="status">Ongoing</span>
                <span v-show="!status">Closed</span>
            </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>