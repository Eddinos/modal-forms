import Vue from 'vue'
import VueRouter from 'vue-router'
import CardList from '../views/CardList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'cardList',
    component: CardList,
    meta: {
      dialog: false
    },
    children: [
      {
        path: 'update',
        name: 'cardUpdate',
        component: () => import(/* webpackChunkName: "update" */ '../components/CardUpdate.vue'),
        props: true,
        meta: {
          dialog: true
        }
      },
      {
        path: 'create',
        name: 'cardCreate',
        component: () => import(/* webpackChunkName: "create" */ '../components/CardCreate.vue'),
        props: true,
        meta: {
          dialog: true
        }
      },
      {
        path: 'delete',
        name: 'cardDelete',
        component: () => import(/* webpackChunkName: "delete" */ '../components/CardDelete.vue'),
        props: true,
        meta: {
          dialog: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
