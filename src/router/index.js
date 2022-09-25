import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CounterComponet from '../components/Counter.vue';
import EmployeeComponet from '../components/Employee.vue';
import UserListComponet from '../components/UserList';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/counter',
    name: 'Counter',
    component: CounterComponet
  },
  {
    path: '/employees',
    name: 'Employee',
    component: EmployeeComponet
  },
  {
    path: '/user-list',
    name: 'UserList',
    component: UserListComponet
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
