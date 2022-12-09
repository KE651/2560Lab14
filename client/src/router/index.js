// import Router from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'
import StateMap from '@/components/StateMap'
import NotFound from '@/components/NotFound'
//import StateDetail from '@/components/StateDetail'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'StateList',
            component: StateList
        },
        {
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        },
        {
            path: '/map/:state', //route for the individual states
            name: 'StateMap',
            component: StateMap
        },
        {
            path:'/:pathMatch(.*)*', // matches any path not matched above
            name: 'NotFound',
            component: NotFound
        }
     //   {
     //   path: '/detail/:state',
     //   name: 'StateDetail',
     //  component: StateDetail
     //   }  
    ]
})