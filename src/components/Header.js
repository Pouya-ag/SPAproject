import { NavLink } from "react-router-dom";

function Header() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Single Page Application</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className={(navData) => navData.isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className={(navData) => navData.isActive ? "nav-link active" : "nav-link"} to="/users">Users</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className={(navData) => navData.isActive ? "nav-link active" : "nav-link"} to="/posts">Posts</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;