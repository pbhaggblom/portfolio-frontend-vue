<script setup>

import { ref } from 'vue';

const name = ref('');
const email = ref('');
const content = ref('');
const response = ref('');
const status = ref('');

const submitMessage = () => {

    const apiUrl = import.meta.env.VITE_API_URL;

    const message = {
        name: name.value,
        email: email.value,
        message: content.value
    }

    fetch(`http://localhost:8080/submit-message`, {
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
    
    <form @submit.prevent="submitMessage" id="form" class="pure-form pure-form-stacked">

        <fieldset>

                <label for="name">Name: </label>
                <input type="text" name="name" id="name" v-model="name">  
 
                <label for="email">Email: </label>
                <input type="text" name="email" id="email" v-model="email">

                <label for="message">Message: </label>
                <textarea type="text" name="message" id="message" v-model="content"></textarea>
                
                <div id="center-submit">
                    <button type="submit" id="submit" class="pure-button">Submit</button>
                </div>
                
        </fieldset>

    </form>
    
    <p id="response" :class="status" v-if="response !== ''">{{ response }}</p>
   
</template>