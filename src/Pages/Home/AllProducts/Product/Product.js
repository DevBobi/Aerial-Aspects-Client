import React from "react";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
    const { id, name, desc, img } = item;
    return (
        <div className="col-md-4 col-sm-12 products-card">
            <div className="card h-100 shadow border-0 ">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h4 className="card-title text-primary">{name}</h4>
                    <p className="card-text">{desc?.slice(0, 150) + "...."}</p>
                </div>
                <div className="text-center m-auto mb-2">
                    <Link to={`/products/${id}`}>
                        <button className="btn btn-info text-white px-5 mb-3">
                            Purchase Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
