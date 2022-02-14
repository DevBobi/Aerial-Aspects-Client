import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AddProduct from "../AdminPages/AddProducts/AddProducts";
import MakeAdmin from "../AdminPages/MakeAdmin/MakeAdmin";
import ManageOrders from "../AdminPages/ManageOrders/ManageOrders";
import AddReview from "../UserPages/AddReview/AddReview";
import MyOrders from "../UserPages/MyOrders/MyOrders";

const Dashboard = () => {
    const { user, logout, admin } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <>
            <div className="row g-0">
                <div className="col-md-12 bg-info text-white text-center p-3">
                    <h1>
                        {user.displayName} 's{" "}
                        <span className="text-dark">Dashboard</span>
                    </h1>
                </div>
                <div style={{ height: "150vh" }} className="col-md-2 p-4 bg-secondary">
                    {/* Admins Options */}
                    <Link to={`/home`}>
                        <button className="btn btn-link fs-6 text-decoration-none text-white">
                            Home
                        </button>
                    </Link>
                    {admin ? (
                        <>

                            <Link to={`${url}/manageorders`}>
                                <button className="btn btn-link fs-6 text-decoration-none text-white">
                                    <i className="far fa-list-alt"></i> Manage Orders
                                </button>
                            </Link>
                            <Link to={`${url}/manageproducts`}>
                                <button className="btn btn-link fs-6 text-decoration-none text-white">
                                    <i className="fas fa-list-ol"></i> Manage Products
                                </button>
                            </Link>
                            <Link to={`${url}/addproduct`}>
                                <button className="btn btn-link fs-6 text-decoration-none text-white">
                                    <i className="far fa-calendar-plus"></i> Add Product
                                </button>
                            </Link>
                            <Link to={`${url}/makeadmin`}>
                                <button className="btn btn-link fs-6 text-decoration-none text-white">
                                    <i className="fas fa-user-cog"></i> Make Admin
                                </button>
                            </Link>
                        </>
                    ) : (
                        <>

                            <Link to={`${url}/myorders`}>
                                <button className="btn btn-link fs-6 text-decoration-none text-white">
                                    <i className="fas fa-list-ol"></i> My Orders
                                </button>
                            </Link>
                            <Link to={`${url}/review`}>
                                <button className="btn btn-link fs-6 text-decoration-none text-white">
                                    <i className="far fa-comment-alt"></i> Review
                                </button>
                            </Link>
                        </>
                    )}
                    <button
                        onClick={logout}
                        className="btn btn-link fs-6 text-decoration-none text-white"
                    >
                        <i className="fas fa-sign-out-alt"></i> Log Out
                    </button>
                </div>
                <div className="col-md-10 container-fluid">
                    <Switch>
                        <Route exact path={path}>
                            <h2 className="mt-4 text-center">
                                <i className="far fa-calendar-check"></i> Welcome to your{" "}
                                <span className="text-success">Dashboard</span>
                            </h2>
                            <h5 className="pt-3 text-center">
                                Here you will find all the activities of you in Falcons Eye
                                website. <br /> We certainly managed a detailed interface to
                                maximize your comforts.
                            </h5>
                        </Route>
                        <Route path={`${path}/myorders`}>
                            <MyOrders />
                        </Route>
                        <Route path={`${path}/review`}>
                            <AddReview />
                        </Route>


                        <Route path={`${path}/manageorders`}>
                            <ManageOrders></ManageOrders>
                        </Route>

                        <Route path={`${path}/makeadmin`}>
                            <MakeAdmin />
                        </Route>
                        <Route path={`${path}/addproduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
