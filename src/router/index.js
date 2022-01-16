/* eslint-disable eol-last */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Live from '../components/live/Live.vue'
import Match from '../components/match/Match.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Index'
    },
    {
        path: '/live',
        name: 'Live',
        component: Live
    },
    {
        path: '/match',
        name: 'Match',
        component: Match
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router