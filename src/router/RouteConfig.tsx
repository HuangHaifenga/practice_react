import TodoList  from '../components/TodoList.tsx'
// 引入依赖项
import { useRoutes } from 'react-router-dom'
// import React,{ lazy } from 'react'
import Login from '../components/login.tsx'



const GetRouters = () => {
    const routes = useRoutes([
        // 默认路由
        {
            path: 'practice_react/',
            element: <Login />
        },
        {
            path: 'practice_react/TodoList',
            element: <TodoList />
        },

    ])
    return routes
}

export default GetRouters


