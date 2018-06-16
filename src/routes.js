import User from './components/user/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetails from './components/user/UserDetails.vue';
import UserEdit from './components/user/UserEdit.vue';
import Header from './components/Header.vue';


export const routes = [
    {
        path: '', name: 'home', components: {
        default: Home, // means Home component for router-view (default - without name)
        'header-top': Header // means that Header component for router-view named 'header-top'
    }
    },
    {
        path: '/user', components: {
        default: User, // means User component for router-view (default - without name)
        'header-bottom': Header // means that Header component for router-view named 'header-bottom'
    }, children: [
        {path: '', component: UserStart},
        {path: ':id', component: UserDetails},
        {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ]
    },
    {path: '/redirect-me', redirect: '/user'},
    {path: '/redirect-me2', redirect: {name: 'home'}},
    {path: '*', redirect:'/'}

];