import {createRouter,createWebHashHistory} from 'vue-router'; import {useAuthStore} from '@/stores/auth'
const router=createRouter({history:createWebHashHistory(),routes:[
 {path:'/',name:'home',component:()=>import('@/views/HomeView.vue'),meta:{title:'Home'}},{path:'/about',name:'about',component:()=>import('@/views/AboutView.vue'),meta:{title:'About author'}},
 {path:'/login',name:'login',component:()=>import('@/views/LoginView.vue'),meta:{title:'Login',layout:'auth'}},
 {path:'/users',component:()=>import('@/views/UsersLayout.vue'),meta:{requiresAuth:true,title:'Users'},children:[{path:'',name:'users',component:()=>import('@/views/UsersView.vue')},{path:':id(\\d+)',name:'user-details',props:true,component:()=>import('@/views/UserDetailsView.vue')},{path:':id(\\d+)/edit',name:'user-edit',props:true,component:()=>import('@/views/UserEditView.vue')}]},
 {path:'/:pathMatch(.*)*',name:'not-found',component:()=>import('@/views/NotFoundView.vue'),meta:{title:'404'}}]})
router.beforeEach(to=>{const auth=useAuthStore(); if(to.meta.requiresAuth&&!auth.isAuthenticated)return {name:'login',query:{redirect:to.fullPath}};if(to.name==='login'&&auth.isAuthenticated)return {name:'users'}});router.afterEach(to=>{document.title=`${String(to.meta.title||'Vue Lottery App')} · Vue Lottery App`});export default router
