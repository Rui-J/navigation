import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index'
import Home from '../views/Home'
import ToDoList from '../views/ToDoList'
import IntersectionObserverScroll from '../views/IntersectionObserver/Scroll'
import IntersectionObserverImage from '../views/IntersectionObserver/Image'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: index,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'toDoList',
        name: 'ToDoList',
        component: ToDoList
      }
    ]

  },
  {
    path: '/intersectionObserver/scroll',
    name: 'IntersectionObserverScroll',
    component: IntersectionObserverScroll
  },
  {
    path: '/intersectionObserver/image',
    name: 'IntersectionObserverImage',
    component: IntersectionObserverImage
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About')
  // }
]

const router = new VueRouter({
  routes
})

export default router
