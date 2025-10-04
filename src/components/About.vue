<script setup>
    const about = "Hello! My name is Pontus and I'm currently studying Java development at Nackademin. I graduating in 2026, and will be open to work in web and software development. Here are some of the fields I have experience in:";

    const skills = ['Java', 'Spring Boot', 'SQL', 'Git/GitHub', 'HTML', 'CSS', 'Javascript', 'Vue.js'];
</script>

<template>
    <div id="about">
        <div id="presentation">
           <p id="about-p">{{ about }}</p> 
        </div>
        <div id="skills">
            <ul v-for="skill in skills" id="skill-list">
                <li>{{ skill }}</li>
            </ul> 
        </div>
        
    </div>
    
</template>