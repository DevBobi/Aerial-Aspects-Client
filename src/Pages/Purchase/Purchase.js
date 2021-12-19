import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import "./Purchase.css";

const Purchase = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    console.log(product)

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);

    // Form Functionality
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        axios
            .post("http://localhost:5000/orders", data)
            .then((res) => {
                //  Showing alert
                if (res.data.insertedId) {
                    alert("Purchase History Recorded");
                    //   Form resetting
                    reset();
                }
            });
    };

    return (
        <>
            <Navbar />
            <div className="container-fluid row mt-3 details-container">
                <h2 className="text-center mb-4">
                    Proceed your order <span className="text-danger">Please</span>

                </h2>
                <div className="col-md-6 col-sm-12">
                    <div className="card mb-3 m-auto">
                        <img src={product?.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title text-center">{product.name}</h3>
                            <p className="card-text">{product.description}</p>
                            <h4 className="card-text text-center">
                                Price: ${product.price}/=
                            </h4>
                        </div>
                    </div>
                </div>
                {/* Form Part */}
                <div className="col-md-6 col-sm-12 order-form">
                    <form
                        className="text-center d-flex flex-column justify-content-center align-items-center"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {product?.name && (
                            <input
                                defaultValue={product?.name}
                                {...register("eventName", { required: true })}
                            />
                        )}
                        {user?.displayName && (
                            <input
                                defaultValue={user?.displayName}
                                {...register("name", { required: true })}
                            />
                        )}
                        {user?.email && (
                            <input
                                defaultValue={user?.email}
                                placeholder="E-mail"
                                {...register("email", { required: true })}
                            />
                        )}
                        <input
                            placeholder="Contact Number"
                            type="number"
                            {...register("phone", { required: true })}
                        />
                        <input
                            placeholder="Your Address"
                            {...register("address", { required: true })}
                        />
                        {product?.price && (
                            <input
                                defaultValue={product?.price}
                                placeholder="Event Cost Per Person"
                                {...register("cost", { required: true })}
                            />
                        )}
                        <input
                            className="btn bg-primary text-white"
                            value="Confirm Order"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Purchase;
