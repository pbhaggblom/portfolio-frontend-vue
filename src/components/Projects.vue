<script setup>
    const projects = [
        {
            title: 'Portfolio frontend',
            description: 'The frontend part of this webpage. Written in Vue.js. The contact form sends messages to the backend application',
            tech: ['HTML', 'Pure.CSS', 'Vue.js'],
            img: '/images/vue.png',
            url: 'https://github.com/pbhaggblom/portfolio-frontend-vue'
        },
        {
            title: 'Portfolio backend',
            description: 'Simple backend application for receiving messages from the contact form on this webpage',
            tech: ['Java', 'Spring Boot', 'PostgreSQL'],
            img: '/images/spring-boot.png',
            url: 'https://github.com/pbhaggblom/cv-webpage-backend'
        }
    ];
</script>

<template>
    <div id="projects">
        <div v-for="project in projects" class="project-card">
            <div class="project-header">
                <img :src="project.img">
                <h3>{{ project.title }}</h3>
            </div>
            <p class="description">{{ project.description }}</p>
            <ul class="tech">
                <li v-for="t in project.tech">{{ t }}</li>
            </ul>
            <a :href="project.url">Go to GitHub</a>
        </div>
    </div>
</template>