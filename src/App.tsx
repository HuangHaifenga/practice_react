// import { useState } from 'react'
// import {useNavigate} from 'react-router-dom'
import './App.scss'
import RoterConfig from '../src/router/RouteConfig.tsx'
// 测试
function App() {
    // const navigate = useNavigate()
    // const jumpTo = (e: any) => {
    //     console.log(e.target.dataset);
    //     navigate(e.target.dataset.path,{replace:true})
    // }
    return (
        <div className="todo">
            {/*<div>*/}
            {/*    <span onClick={jumpTo} data-path='/TodoList'>page1</span>*/}
            {/*    <span onClick={jumpTo} data-path='/Login'>page2</span>*/}
            {/*</div>*/}
            <RoterConfig></RoterConfig>
        </div>
    )
}

export default App