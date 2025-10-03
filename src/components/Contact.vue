<script setup>

import { ref } from 'vue';

const name = ref('');
const email = ref('');
const content = ref('');
const response = ref('');

const submitMessage = () => {

    const message = {
        name: name,
        email: email,
        message: content
    }

    fetch("http://localhost:8080/submit-message", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message)    
    })
    .then(res => {
        return res.text();
    })
    .then(response => {
        console.log(response);
        
    }) 
}

</script>

<template>
    <form @submit.prevent="submitMessage">
        <label for="name">Name: </label>
        <input type="text" name="name" id="name" v-model="name">
        <br>
        <label for="email">Email: </label>
        <input type="text" name="email" id="email" v-model="email">
        <br>
        <label for="message">Message: </label>
        <textarea type="text" name="message" id="message" v-model="content"></textarea>
        <br>
        <button type="submit" id="submit">Submit</button>    
    </form>
    <p id="response"></p>    
</template>