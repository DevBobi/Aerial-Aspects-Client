import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../Images/userIcon.png";
import { FcGoogle } from 'react-icons/fc';
import './Login.css'
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const Login = () => {
    const { signInWithGoogle, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <>
            <Navbar />
            <div className="login-area my-5 ">
                {
                    authError && <div className="alert alert-danger m-3" role="alert">
                        {authError}
                    </div>
                }
                <div className="text-center p-3">
                    <img width="100px" src={logo} alt="" />
                    <h2>Please Login</h2>
                </div>
                <div className="text-center py-2" >
                    <button onClick={handleGoogleSignIn} className="m-0 g-btn"><FcGoogle /> SignIn Using Google</button>
                </div >
            </div >
            <Footer />
        </>
    );
};

export default Login;
