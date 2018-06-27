import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login/Login'
import Screen from '@/pages/Screen/Screen'

let routes = [
	{
        path: '/',
        component: Screen,
        name: '',
        hidden: true
    },
    {
        path: '/Login',
        component: Login,
        name: '登录',
        hidden: true
    }
]
export default routes;
//Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
