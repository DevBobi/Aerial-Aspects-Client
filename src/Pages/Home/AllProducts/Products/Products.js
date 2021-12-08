import React, { useEffect, useState } from "react";
import Product from "../Product/Product";


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./Products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="py-5">
            <h1 className="text-center my-5">
                Our Top <span className="text-info">Products</span>
                __
            </h1>
            <div className="row g-5 card-group p-3 mx-0 products-cards">
                {products.slice(0, 6).map((item) => (
                    <Product key={item?.id} item={item}></Product>
                ))}
            </div>
        </div>
    );
};

export default Products;
