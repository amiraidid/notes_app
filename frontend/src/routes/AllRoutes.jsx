import { Route, Routes } from "react-router-dom"
import { Home, Login, SignUp, PageNotFound, Notes, Dashbaord } from "../pages"
import ProtectedRoutes from "./ProtectedRoutes"


function AllRoutes() {
    return (
        <main className="">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<SignUp />} />
                <Route path="get-notes" element= {<ProtectedRoutes><Notes /></ProtectedRoutes>}/>
                <Route path="dashboard" element= {<ProtectedRoutes><Dashbaord /></ProtectedRoutes>}/>
                <Route path='*' element={<PageNotFound />}/>
            </Routes>
        </main>
    )
}

export default AllRoutes