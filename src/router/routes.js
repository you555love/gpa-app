// import { useAuthStore } from '@/stores/authstore'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: 'Product', component: () => import('@/pages/IndexPage.vue') },
      { path: 'second', component: () => import('@/pages/SecondPage.vue') },
      { path: 'note', component: () => import('@/pages/NotePage.vue') },
      {
        path: 'note/:id',
        name: 'NoteDetail',
        component: () => import('@/pages/NotePageDetail.vue'),
      },
      {
        path: 'button',
        component: () => import('@/pages/Ex/Ex_qbtn.vue'),
        meta: { requireAuth: true },
      },
      { path: 'list', component: () => import('@/pages/Ex/Ex_qlist.vue') },
      { path: 'table', component: () => import('@/pages/Ex/Ex_qtable.vue') },
      { path: 'notify', component: () => import('@/pages/Ex/Ex_Notify.vue') },
      { path: 'Loading', component: () => import('@/pages/Ex/Ex_loading.vue') },
      { path: 'Dialog', component: () => import('@/pages/Ex/Ex_dialog.vue') },
      { path: 'validation', component: () => import('@/pages/Ex/Ex_validation.vue') },
      {
        path: 'pinia',
        component: () => import('@/pages/Ex/ExPinia.vue'),
        meta: { requireAuth: true },
      },
      { path: 'testapi', component: () => import('@/pages/Ex/Ex_api.vue') },
      { path: 'crud', component: () => import('@/pages/Ex/Ex_crud.vue') },
      { path: 'mockapi', component: () => import('@/pages/SubjectPage.vue') },
      { path: 'login', name: 'login', component: () => import('@/pages/ch7/LoginPage.vue') },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/pages/ch7/ProfilePage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/pages/ch7/LoginPage.vue'),
      },
      {
        path: '/teacher',
        name: 'teacher',
        component: () => import('@/pages/ch7/TeacherPage.vue'),
        meta: {
          requiresAuth: true,
          roles: ['teacher', 'admin'],
        },
      },
      {
        path: '/admin',
        name: 'admin',
        component: () => import('@/pages/ch7/AdminPage.vue'),
        meta: {
          requiresAuth: true,
          roles: ['admin'],
        },
      },
      { path: 'env', component: () => import('@/pages/ch8/Ex_env.vue') },
      {
        path: '',
        name: 'subject',
        component: () => import('@/pages/ch8/SubjectPage.vue'),
      },
    ],
  },
  {
    path: '/newnote',
    name: 'NewNote',
    component: () => import('@/pages/NewNote.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
]

export default routes
