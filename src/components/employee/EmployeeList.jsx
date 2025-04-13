import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {deleteEmployee, getAllEmployees} from "../../api/employeeApi.js";

function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        setLoading(true);
        try {
            const data = await getAllEmployees();
            setEmployees(data);
        } catch (error) {
            console.error("Failed to fetch employees", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        loadEmployees();
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Employee List</h6>
                            <Link to="/employees/create" className="btn btn-sm btn-primary">Add Employee</Link>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-light">
                                        <tr>
                                            <th className="text-end">#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? (
                                            <tr>
                                                <td colSpan="4" className="text-center py-4">
                                                    <div className="spinner-border text-primary" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : (
                                            <>
                                                {employees.map(employee => (
                                                    <tr key={employee.id}>
                                                        <td className="text-end">{employee.id}</td>
                                                        <td>{employee.firstName + " " + employee.lastName}</td>
                                                        <td>{employee.email}</td>
                                                        <td>
                                                            <Link to={`/employees/${employee.id}/edit`} className="btn btn-sm btn-warning me-2">Edit</Link>
                                                            <button onClick={() => handleDelete(employee.id)} className="btn btn-sm btn-danger">Delete</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {employees.length === 0 && (
                                                    <tr>
                                                        <td colSpan="4" className="text-center">No employees found.</td>
                                                    </tr>
                                                )}
                                            </>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeList;