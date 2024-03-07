import TodoList  from '../components/TodoList.tsx'
// 引入依赖项
import { Navigate,useRoutes } from 'react-router-dom'
// import React,{ lazy } from 'react'
import Login from '../components/login.tsx'



const GetRouters = () => {
    const routes = useRoutes([
        // 默认路由
        {
            path: '/',
            element: <Navigate to="/TodoList" />
        },
        {
            path: '/TodoList',
            element: <TodoList />
        },
        {
            path: '/Login',
            element: <Login />
        }
    ])
    return routes
}

export default GetRouters


