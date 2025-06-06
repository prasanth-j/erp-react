import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {createEmployee} from "../../api/employeeApi.js";
import {trans} from "../../helpers/helper.js";

function EmployeeCreate() {
    const [form, setForm] = useState({name: '', email: ''});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createEmployee(form);
        navigate('/employees');
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">{trans('employee.create_title')}</h6>
                            <Link to="/employees" className="btn btn-sm btn-secondary">{trans('common.back')}</Link>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label htmlFor="name">{trans('employee.name')}</label>
                                    <input type="text" className="form-control" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email">{trans('employee.email')}</label>
                                    <input type="email" className="form-control" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required/>
                                </div>

                                <button className="btn btn-primary">{trans('common.create')}</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeCreate;