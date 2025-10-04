<script setup>
    const projects = [
        {
            title: 'Frontend',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rem voluptate harum nobis libero nesciunt totam consequatur officiis nisi asperiores?'
        },
        {
            title: 'Backend',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, officia quae. Quasi id deserunt deleniti delectus voluptatem consequatur. Maiores, eaque!'
        }
    ];
</script>

<template>
    <div v-for="project in projects">
        <div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
        </div>
    </div>
</template>