import Vue from 'vue'
import Router from 'vue-router'
import StudentsList from './views/StudentsList'
import GroupList from './views/GroupList'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/students'
        },
        {
            path: '/students',
            component: StudentsList
        },
        {
            path: '/groups',
            component: GroupList
        }
    ]
})
