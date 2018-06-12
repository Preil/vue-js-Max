import User from './components/User.vue';
import Home from './Home.vue';

export const routes = [
    {path: '', component: Home},
    {path: '/user', component: User},

];