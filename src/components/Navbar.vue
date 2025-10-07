<script setup>
    const model = defineModel();

    const update = (section) => {
        model.value = section;
    };

</script>

<template>
    <nav>

        <button @click="update('About')" class="nav-link" :class="{selected: model === 'About'}">About</button>
        <button @click="update('Projects')" class="nav-link" :class="{selected: model === 'Projects'}">Projects</button>
        <button @click="update('Contact')" class="nav-link" :class="{selected: model === 'Contact'}">Contact</button>
    
    </nav>
</template>