import './scss/App.scss'
import GetRouters from "./router/RouteConfig.tsx";
// 测试
function App() {

    return (
        <div className="todo">
            <GetRouters></GetRouters>
        </div>
    )
}

export default App