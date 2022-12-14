
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Employee from './pages/Employee'
import Student from './pages/Student'
import Sidebar from './Components/Sidebar'

function Navbar (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sidebar/>}>
                    <Route index element = {<Home />} />
                    <Route path = "dashboard" element = {<Dashboard />} />
                    <Route path = "employee" element = {<Employee/>} />
                    <Route path = "student" element = {<Student/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default Navbar