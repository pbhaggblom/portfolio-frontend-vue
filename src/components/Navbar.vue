<script setup>
    const model = defineModel();

    const update = (component) => {
        model.value = component;
    };

</script>

<template>
    <nav>
        <button @click="update('About')">About</button>
        <button @click="update('Projects')">Projects</button>
        <button @click="update('Contact')">Contact</button>
    </nav>
</template>