<script setup>
defineProps({
    title: String,
    description: String,
    tech: Array,
    img: String,
    url: String
})
</script>

<template>
    <div  class="project-card">
            <div class="project-header">
                <img :src="img">
                <h3>{{ title }}</h3>
            </div>
            <p class="description">{{ description }}</p>
            <ul class="tech">
                <li v-for="t in tech">{{ t }}</li>
            </ul>
            <a :href="url" target="_blank">Go to GitHub</a>
        </div>
</template>