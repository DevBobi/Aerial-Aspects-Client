import React from "react";
import { useForm } from "react-hook-form";
import "./AddProducts.css";
import axios from "axios";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        axios
            .post("https://intense-badlands-84836.herokuapp.com/products", data)
            .then((res) => {
                //  Showing alert
                if (res.data.insertedId) {
                    alert("New Bird Added Successfully");
                    //   Form resetting
                    reset();
                }
            });
    };

    return (
        <div className="addService">
            <h2 className="text-center my-4 pb-3">
                Any new <span className="text-success">Bird</span> in the family?{" "}
                <span className="text-primary">Add Please_</span>
            </h2>
            <div className="container-fluid">
                <form
                    className="text-center d-flex flex-column justify-content-center align-items-center"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        placeholder="Drone Model"
                        {...register("name", { required: true, maxLength: 25 })}
                    />
                    <textarea placeholder="Specification" {...register("desc")} />
                    <input
                        placeholder="Approx Price"
                        type="number"
                        {...register("price")}
                    />
                    <input placeholder="Image" {...register("img")} />
                    <input className="btn bg-warning text-white" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
