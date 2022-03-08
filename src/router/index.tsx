import {Routes, Route, Navigate} from "react-router-dom"
import Tasks from "../pages/Tasks"
import NotFound from "../pages/NotFound"
import Default from "../layouts/Default"
import Error from "../layouts/Error"

const Router = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/404"/>}/>
            <Route path="/" element={<Default/>}>
                <Route index element={<Tasks/>}/>
                <Route path="/dailytasks" element={<Tasks/>}/>
            </Route>
            <Route path="/404" element={<Error/>}>
                <Route index element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default Router
