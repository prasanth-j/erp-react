import {Link} from "react-router-dom";
import {trans} from "../helpers/helper.js";

function Home() {
    return (
        <div className="text-center">
            <h1>{trans('home.welcome', { app: trans('app_name') })}</h1>
            <Link to="/employees" className="btn btn-primary mt-3">{trans('home.go_to_employees')}</Link>
        </div>
    );
}

export default Home;