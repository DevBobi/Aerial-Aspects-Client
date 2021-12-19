import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
    const { user, logout } = useAuth();
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

                                {!user?.email ? (

                                    <Link to="/login" className="nav-link btn btn">
                                        <i className="far fa-user me-2"></i>
                                        Login
                                    </Link>

                                ) : (
                                    <div class="dropdown">
                                        <button class="btn btn text-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="far fa-user me-2"></i>
                                            {user.displayName}
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li className="dropdown-item">
                                                <Link to="/dashboard" className="nav-link text-dark">
                                                    Dashboard
                                                </Link>
                                            </li>
                                            <li className="dropdown-item">
                                                <Link to="/explore" className="nav-link text-dark">
                                                    Explore
                                                </Link>
                                            </li>
                                            <li> <Link onClick={logout} className="nav-link text-dark ps-4">
                                                Log Out
                                            </Link></li>
                                        </ul>
                                    </div>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div >
        </div >
    );
};

export default Navbar;
