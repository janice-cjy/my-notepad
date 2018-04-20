import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login.vue'
import Home from '@/pages/Home.vue'
import EventList from '@/pages/EventList.vue'
import EditEvent from '@/pages/EditEvent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
    	path: '/Home',
    	name: 'Home',
    	component: Home,
      children:[
        {
          path: 'EventList',
          component: EventList
        },
        {
          path: 'EditEvent',
          component: EditEvent
        }
      ]
    }
  ]
})
