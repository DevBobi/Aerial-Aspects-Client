import React from "react";
// import useAuth from "../../Hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
    // const { user, logout } = useAuth();
    return (
        <div>
            <div className="top-header">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid px-5">
                        <a className="navbar-brand text-info brand-logo" href="/">
                            <i class="fab fa-atlassian"></i>erial Aspects
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="d-flex align-items-center justify-content-center navbar-nav ms-auto mb-2 mb-lg-0 fs-5 ">
                                <li className="nav-item">
                                    <a href="/" className="nav-link">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/explore" className="nav-link">
                                        Explore
                                    </a>
                                </li>
                                {/* {user?.email && ( */}
                                <li className="nav-item">
                                    <a href="/dashboard" className="nav-link">
                                        Dashboard
                                    </a>
                                </li>
                                {/* )}
                                {user?.email && ( */}
                                <li className="nav-item">
                                    <small className="nav-link fs-5 text-info">
                                        <i className="far fa-user me-2"></i>
                                        {/* {user.displayName} */}
                                    </small>
                                </li>
                                {/* )} */}

                                {/* {!user?.email ? ( */}
                                <li className="nav-item">
                                    <a href="/login" className="nav-link">
                                        Log In
                                    </a>
                                </li>
                                {/* ) : ( */}
                                <li className="nav-item">
                                    <button onClick={""} className="btn btn-warning">
                                        Log Out
                                    </button>
                                </li>
                                {/* )} */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
