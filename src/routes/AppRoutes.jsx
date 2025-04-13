import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/errors/NotFound.jsx";
import EmployeeList from "../components/employee/EmployeeList.jsx";
import EmployeeCreate from "../components/employee/EmployeeCreate.jsx";
import EmployeeEdit from "../components/employee/EmployeeEdit.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/employees" element={<EmployeeList/>}/>
            <Route path="/employees/create" element={<EmployeeCreate/>}/>
            <Route path="/employees/:id/edit" element={<EmployeeEdit/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default AppRoutes;