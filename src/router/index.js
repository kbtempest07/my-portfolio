import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import AboutMe from '@/components/aboutMe'
import ContactMe from '@/components/contactMe'
import MyWorks from '@/components/myWork'
const PageNotFound = () => import('@/components/404Page');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'PageNotFound',
      meta: { title: '404', nosubmenu: true, noauth: true, noheader: true, nofooter: true },
      component: PageNotFound,
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/my-works',
      name: 'MyWorks',
      component: MyWorks
    },
    {
      path: '/about',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/contact',
      name: 'ContactMe',
      component: ContactMe
    }
  ]
})
