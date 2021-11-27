import { createApp } from 'vue';

import App from './App.vue';
import HomeContents from './components/HomeContents.vue';
import ProjectContent from './components/ProjectContent.vue';
 const app = createApp(App);
 
 app.component('home-content', HomeContents);
 app.component('project-content', ProjectContent);
 
 app.mount('#app');
