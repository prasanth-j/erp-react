import {Link, useNavigate, useParams} from "react-router-dom";
import {getEmployeeById, updateEmployee} from "../../api/employeeApi.js";
import {useEffect, useState} from "react";

function EmployeeEdit() {
    const [form, setForm] = useState({ name: '', email: '' });
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        setLoading(true);
        try {
            const data = await getEmployeeById(id);
            setForm({ name: data.firstName + " " + data.lastName, email: data.email });
        } catch (error) {
            console.error("Error loading employee:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateEmployee(id, form);
        navigate('/employees');
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Edit Employee</h6>
                            <Link to="/employees" className="btn btn-sm btn-secondary">Back</Link>
                        </div>
                        <div className="card-body">
                            {loading ? (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>

                                    <div className="mb-3">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required/>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required/>
                                    </div>

                                    <button className="btn btn-primary">Update</button>

                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeEdit;