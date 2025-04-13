import {Link} from "react-router-dom";
import {trans} from "../../helpers/helper.js";

function NotFound() {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="text-center">
                <h1 className="display-1 fw-bold text-danger">{trans('error.not_found.title')}</h1>
                <p className="fs-3">
                    <span className="text-danger">{trans('error.not_found.oops')}</span> {trans('error.not_found.message')}
                </p>
                <p className="lead">{trans('error.not_found.description')}</p>
                <Link to="/" className="btn btn-primary">{trans('error.not_found.go_home')}</Link>
            </div>
        </div>
    );
}

export default NotFound;