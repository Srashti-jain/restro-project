import HomeR from './components/HomeR.vue'
import SignUp from './components/SignUp.vue'
import { createRouter,createWebHistory } from 'vue-router'
import LogIn from './components/LogIn.vue'
import AddR from './components/AddR.vue'
import UpdateR from './components/UpdateR.vue'

const routes=[
    {
        name:'HomeR',
        component:HomeR,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'LogIn',
        component:LogIn,
        path:'/LogIn'
    },
    
    {
        name:'AddR',
        component:AddR,
        path:'/add'
    },
    
    {
        name:'UpdateR',
        component:UpdateR,
        path:'/update/:id'
    }
    
]

const router=createRouter ({
 history:createWebHistory(),
 routes
})
export default router
