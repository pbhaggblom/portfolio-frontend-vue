<script setup>
    import About from './About.vue';
    import Projects from './Projects.vue';
    import Contact from './Contact.vue';

    const emit = defineEmits(['update'])

    const setActive = (component) => {
        emit('update', component)
    }

</script>

<template>
    <nav>
        <button @click="setActive(About)">About</button>
        <button @click="setActive(Projects)">Projects</button>
        <button @click="setActive(Contact)">Contact</button>
    </nav>
</template>