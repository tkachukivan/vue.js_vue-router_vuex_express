import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home/Home.vue';
import BookPage from '../components/BookPage/BookPage.vue';
import BooksList from '../components/BooksList/BooksList.vue';
import NotFound from '../components/NotFound/NotFound.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/book/:id',
        component: BookPage,
    },
    {
        path: '/books',
        component: BooksList,
        props: { listType: 'user' }
    },
    {
        path: '/404',
        component: NotFound
    },
    {
        path: '*',
        redirect: '/404'
    }
];

export default new VueRouter({
    mode: 'history',
    routes
});
