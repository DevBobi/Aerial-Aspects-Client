import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import formImg from "../../images/register.png";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password1, location, history);
        e.preventDefault();
    };

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    return (
        <>
            <div className="row container-fluid">
                <div className="col-sm-6">
                    <h2 className="text-center mt-5">Log In</h2>
                    <form onSubmit={handleLoginSubmit} className="px-5">
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleOnChange}
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                name="password1"
                                onChange={handleOnChange}
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary mt-2">
                            Log In
                        </button>
                        <div className="d-block text-center">
                            <Link to="/register">
                                <button
                                    type="button"
                                    className="text-decoration-none mt-2 btn btn-link fs-5"
                                >
                                    New User? Please Register
                                </button>
                            </Link>
                            {isLoading && (
                                <div className="text-center">
                                    <div className="spinner-border text-secondary " role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            )}
                            {user?.email && (
                                <div className="alert alert-success" role="alert">
                                    <i className="far fa-check-circle me-2"></i> Log in
                                    successful!
                                </div>
                            )}
                            {authError && (
                                <div className="alert alert-danger" role="alert">
                                    <i className="fas fa-exclamation-triangle me-2"></i>{" "}
                                    {authError}
                                </div>
                            )}
                        </div>
                    </form>
                </div>
                <div className="col-sm-6">
                    <img className="w-100" src={formImg} alt="" />
                </div>
            </div>
        </>
    );
};

export default Login;
