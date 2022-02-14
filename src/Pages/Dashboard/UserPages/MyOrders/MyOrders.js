import React, { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [singleOrder, setSingleOrder] = useState([]);
    const { user } = useAuth();
    console.log(orders);

    useEffect(() => {
        fetch("https://intense-badlands-84836.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    // const filteredOrders = orders.filter(
    //     singleOrder => singleOrder?.email === user.email
    // );

    // Deleting a confirmed order
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm(
            "Are you sure, You want to cancel the order?"
        );
        if (proceed) {
            const url = `https://intense-badlands-84836.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Order Cancelled Successfully");
                        const remainingOrders = orders.filter(
                            (remOrder) => remOrder._id !== id
                        );
                        setOrders(remainingOrders);
                        // window.location.reload();
                    }
                });
        }
    };

    return (
        <div className="container">
            <h2 className="text-center my-4 ">
                <span className=" text-success">All Your Orders </span>Goes There_
            </h2>
            {orders.map((singleOrder) => (
                <div key={singleOrder._id} className="bg-dark text-light my-3 mx-2 rounded">
                    <div className="py-2 px-5">
                        <h5>{singleOrder?.displayName}</h5>
                        <h5 className=" fw-bold">{singleOrder?.eventName}</h5>
                        <p>
                            Email: {singleOrder?.email}
                            <br />
                            Address: {singleOrder?.address}
                            <br />
                            Price: $ {singleOrder?.cost}
                        </p>
                        {/* <button
                            onClick={() => handleDeleteOrder(singleOrder?._id)}
                            className="btn btn-warning px-5"
                        >
                            Cancel
                        </button> */}
                        <button
                            onClick={() => handleDeleteOrder(singleOrder?._id)}
                            type="button" class="btn btn-danger btn-sm px-3 py-2">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyOrders;
