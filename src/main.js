import { createApp } from 'vue'
import App from './App.vue'
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';

const app = createApp(App);

app.component('About', About);
app.component('Projects', Projects);
app.component('Contact', Contact)

app.mount('#app')
