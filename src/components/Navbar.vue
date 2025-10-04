<script setup>
    const model = defineModel();

    const update = (section) => {
        model.value = section;
    };

</script>

<template>
    <nav>

        <button @click="update('About')" class="nav-link">About</button>
        <button @click="update('Projects')" class="nav-link">Projects</button>
        <button @click="update('Contact')" class="nav-link">Contact</button>
    
    </nav>
</template>