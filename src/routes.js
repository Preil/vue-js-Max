import Header from './components/Header.vue';
import Home from './components/Home.vue';

// Lazy loading of components application
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    });
};
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    });
};
const UserDetails = resolve => {
    require.ensure(['./components/user/UserDetails.vue'], () => {
        resolve(require('./components/user/UserDetails.vue'));
    });
};
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    });
};



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
        {
            path: ':id', component: UserDetails, beforeEnter: (to, from, next) => {
            console.log('inside route setup');
            next();
        }
        },
        {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ]
    },
    {path: '/redirect-me', redirect: '/user'},
    {path: '/redirect-me2', redirect: {name: 'home'}},
    {path: '*', redirect: '/'}

];