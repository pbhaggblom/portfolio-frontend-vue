<script setup>

import { ref } from 'vue';

const name = ref('');
const email = ref('');
const content = ref('');
const response = ref('');
const status = ref('');

const submitMessage = () => {

    const message = {
        name: name.value,
        email: email.value,
        message: content.value
    }

    fetch("http://localhost:8080/submit-message", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message)    
    })
    .then(res => {
        if (res.status === 200) {
            status.value = 'ok';
            name.value = '';
            email.value = '';
            content.value = '';
        } else {
            status.value = 'error';
        }
        return res.text();
    })
    .then(res => {
        response.value = res;
    });
}

</script>

<template>
    
    <form @submit.prevent="submitMessage" id="form" class="pure-form">
        <label for="name">Name: </label>
        <br>
        <input type="text" name="name" id="name" v-model="name">
        <br>
        <label for="email">Email: </label>
        <br>
        <input type="text" name="email" id="email" v-model="email">
        <br>
        <label for="message">Message: </label>
        <br>
        <textarea type="text" name="message" id="message" v-model="content"></textarea>
        <br>
        <button type="submit" id="submit">Submit</button>    
    </form>
    
    <p :class="status" v-if="response !== ''">{{ response }}</p>
   
</template>

<style scoped>
.ok {
    color: green;
}

.error {
    color: red;
}
</style>