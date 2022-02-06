import { Routes, Route } from "react-router-dom"
import Tasks from "../pages/Tasks"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Tasks />} />
    </Routes>
  )
}

export default Router
