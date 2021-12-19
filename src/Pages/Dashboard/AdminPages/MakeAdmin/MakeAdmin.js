import React, { useState } from "react";

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    };

    const handleAdminSubmit = (e) => {
        const user = { email };
        fetch("http://localhost:5000/users", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
                console.log(data);
            });

        e.preventDefault();
    };

    return (
        <div className="mt-5">
            <h2 className="text-center mt-3">
                Want to make another <span className="text-danger">Admin?</span>
            </h2>
            <div className="w-50 m-auto">
                <form onSubmit={handleAdminSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            User Email
                        </label>
                        <input
                            type="email"
                            onBlur={handleOnBlur}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-success px-4">
                        Make Admin
                    </button>
                    {success && (
                        <div className="alert alert-success mt-3" role="alert">
                            <i className="far fa-check-circle me-2"></i> Admin created
                            successfully!
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;
