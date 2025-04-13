import {Link} from "react-router-dom";
import {trans} from "../helpers/helper.js";

function Home() {
    return (
        <div className="text-center">
            <h1>Welcome to {trans('app_name')}</h1>
            <Link to="/employees" className="btn btn-primary mt-3">Go to Employees</Link>
        </div>
    );
}

export default Home;