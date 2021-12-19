import React, { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    const filteredOrders = orders.filter(
        (singleOrder) => singleOrder.email === user.email
    );

    // Deleting a confirmed order
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm(
            "Are you sure, You want to cancel the order?"
        );
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
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
            <h2 className="text-center my-4">
                All Your <span className="text-success">Orderd Birds </span>Goes There_
            </h2>
            {filteredOrders.map((singleOrder) => (
                <div key={singleOrder._id} className="bg-info my-3 mx-2 rounded">
                    <div className="py-2 px-5">
                        <h5>{singleOrder?.displayName}</h5>
                        <h5 className=" fw-bold">{singleOrder?.eventName}</h5>
                        <p>
                            Email: {singleOrder.email}
                            <br />
                            Address: {singleOrder.address}
                            <br />
                            Price: $ {singleOrder.cost}
                        </p>
                        <button
                            onClick={() => handleDeleteOrder(singleOrder._id)}
                            className="btn btn-warning px-5"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyOrders;
