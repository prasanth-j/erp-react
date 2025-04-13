import {Link, useLocation} from "react-router-dom";
import {trans} from "../helpers/helper.js";

function AppLayout({children}) {
    const location = useLocation();

    const navItems = [
        {name: "Home", path: "/"},
        {name: "Employees", path: "/employees"},
    ];

    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/" ? "active" : "";
        }

        return location.pathname.startsWith(path) ? "active" : "";
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <span className="fs-4">{trans('app_name')}</span>
                    </Link>
                    <ul className="nav nav-pills">
                        {navItems.map((navItem) => (
                            <li className="nav-item" key={navItem.path}>
                                <Link to={navItem.path} className={`nav-link ${isActive(navItem.path)}`}>{navItem.name}</Link>
                            </li>
                        ))}
                    </ul>
                </header>
            </div>

            <main className="flex-grow-1">
                {children}
            </main>

            <div className="container">
                <footer className="border-top py-3 my-4">
                    <p className="text-center text-body-secondary">&copy; 2025 {trans('app_name')}</p>
                </footer>
            </div>
        </div>
    );
}

export default AppLayout;