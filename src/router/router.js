export default [
  {
    path: '/',
    name: 'home',
    comments: () => import('views/main/Home.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('views/main/Home.vue')
  },
  {
    path: '/information',
    name: 'information',
    component: () => import('views/information/Information.vue')
  },
  {
    path: '/informationInfo',
    name: 'informationInfo',
    component:() => import('views/information/InformationInfo.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('views/user/User.vue')
  }
]
