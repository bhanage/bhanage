import HomeComp from './components/HomeComp.vue'
import SignUp from './components/SignUp.vue'
import LoginComp from './components/LoginComp.vue'
import AddRest from './components/AddRest.vue'
import UpdateRest from './components/UpdateRest.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name: 'HomeComp',
        path: '/',
        component: HomeComp
    },
    {
        name: 'SignUp',
        path: '/SignUp',
        component: SignUp
    },
    {
        name: 'LoginComp',
        path: '/LoginComp',
        component: LoginComp
    },
    {
        name: 'AddRest',
        path: '/AddRest',
        component: AddRest
    },
    {
        name: 'UpdateRest',
        path: '/UpdateRest/:id',
        component: UpdateRest
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router