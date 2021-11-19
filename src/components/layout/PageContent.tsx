/**
 * V6版参考例子：https://codesandbox.io/s/react-router-article-part-1-07zkb?from-embed=&file=/src/App.js
 */

import Home from "@/components/pages/Home"
import Login from "@/components/pages/Login"
import Register from "@/components/pages/Register"
import Paths from "@/libs/client/utils/Paths"
import { Route, Routes } from "react-router-dom"

const PageContent =()=>{
    return(
        <Routes>
            <Route path={Paths.ACCOUNT_LOGIN} element={<Login></Login>}></Route>
            <Route path={Paths.ACCOUNT_REGISTER} element={<Register></Register>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
        </Routes>
    )
}
export default PageContent