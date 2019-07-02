import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index.vue'
import Support from '../views/Support.vue'
import Search from '../views/Search.vue'
import Mine from '../views/Mine.vue'
import Detail from '../views/Detail.vue'
import Regis from '../views/Regis.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
//
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/index',
      // name: 'index',
    },
    {
      path:'/index',
      name:'index',
      component:Index,
      meta:{
        flag:true,
      }
    },
    {
      path:'/support',
      name:'Support',
      component:Support,
      meta:{
        flag:true,
      }
    },
    {
      path:'/search',
      name:'Search',
      component:Search,
      meta:{
        flag:true,
      }
    },

    {
      path:'/mine',
      name:'Mine',
      component:Mine,
      meta:{
        flag:true,
      }
    },
    {
      path:'/detail',
      name:'Detail',
      component:Detail,
      meta:{
        flag:false,
      }
    },
    {
      path:'/regis',
      name:'Regis',
      component:Regis,
      meta:{
        flag:false,
      }
    },
    {
      path:'/login',
      name:'Login',
      component:Login,
      meta:{
        flag:false,
      }
    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart,
      meta:{
        flag:true,
      }
    }

  ]
})



//吴涛的代码
// import Vue from 'vue'
// import Router from 'vue-router'
// import index from './views/index.vue'
// import category from './views/category.vue'
// import cart from './views/cart.vue'
// import mine from './views/mine.vue'
// import search from './views/search.vue'
// import pingou from './views/pingou'
// import seek from "./components/pingou/seek/Seek";
// import pgindex from "./components/pingou/pgIndex/pgIndex";
// import pgMine from "./components/pingou/pgMine/PgMine";
// import welfare from "./components/pingou/welfare/Welfare";
// import login from './views/login.vue'
// import admin from './components/login/admin'
// import dx from './components/login/dx'
// import reg from './components/login/reg'
// Vue.use(Router)
//
// export default new Router({
//   mode: "history",
//   routes: [
//     {
//       path: '/',
//       redirect:'/index',
//     },
//     {
//       path: '/index',
//       name: 'Index',
//       component: index
//     },
//     {
//       path: '/category',
//       name: 'Category',
//       component: category,
//       meta:{
//         flag:true,
//       },
//     },
//     {
//       // path: '/pingou/pgIndex',
//       // name: 'PingouIndex',
//       // component: pgindex,
//       // meta:{
//       //     flag1:true,
//       // },
//       path: "/pingou",
//       name: "Pingou",
//       component: pingou,
//       meta:{
//         flag1:true,
//       },
//       // redirect:'pingou/pgIndex',
//       children: [
//         {
//           path: "pgIndex",
//           name: "PgIndex",
//           component: pgindex,
//
//           meta:{
//             flag1:true,
//           },
//         },
//         {
//           path: "seek",
//           name: "Seek",
//           component: seek,
//           meta:{
//             flag1:true,
//           },
//         },
//         {
//           path: "welfare",
//           name: "Welfare",
//           component: welfare,
//           meta:{
//             flag1:true,
//           },
//         },
//         {
//           path: "pgmine",
//           name: "PgMine",
//           component: pgMine,
//           meta:{
//             flag1:false,
//           },
//         }
//       ]
//     },
//     {
//       path: '/cart',
//       name: 'Cart',
//       component: cart,
//       meta:{
//         flag:true,
//       },
//     },
//     {
//       path: '/mine',
//       name: 'Mine',
//       component: mine,
//       meta:{
//         flag:true,
//       },
//     },
//     {
//       path: '/search',
//       name: 'Search',
//       component: search,
//       meta:{
//         flag:false,
//       },
//     },
//     {
//       path: "/reg",
//       name: "Reg",
//       component: reg,
//       meta:{
//         flag:false,
//       },
//     },
//     {
//       path: "/login",
//       name: "Login",
//       component: login,
//       meta:{
//         flag2:true,
//       },
//       redirect:'login/admin',
//       children: [
//         {
//           path: "admin",
//           name: "Admin",
//           component: admin,
//
//           meta:{
//             flag2:true,
//           },
//         },
//         {
//           path: "dx",
//           name: "Dx",
//           component: dx,
//
//           meta:{
//             flag2:true,
//           },
//         },
//
//       ]
//     },
//   ]
// })

