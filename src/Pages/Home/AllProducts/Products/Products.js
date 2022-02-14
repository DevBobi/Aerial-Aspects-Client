import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { FadeLoader } from "react-spinners";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState('');

    useEffect(() => {
        fetch("https://intense-badlands-84836.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch(e => setErr(e.message))
            .finally(() => setLoading(false))

    }, []);

    return (
        <div className="py-5">
            <h1 className="text-center my-5">
                Our Top <span className="text-info">Products</span>
                __
            </h1>
            {loading ?
                <div className="spinner-box">
                    <FadeLoader color="#777777" />
                </div>
                :
                <div className="row g-5 card-group p-3 mx-0 products-cards">
                    {products.slice(0, 6).map((item) => (
                        <Product key={item?._id} item={item}></Product>
                    ))}
                </div>
            }

        </div>
    );
};

export default Products;
