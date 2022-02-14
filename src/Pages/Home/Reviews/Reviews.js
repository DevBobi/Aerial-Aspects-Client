import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://intense-badlands-84836.herokuapp.com/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center text-secondary">
                <i className="far fa-2x fa-comments text-info"></i>
                <span className="text-success"> Client</span> Says__
            </h1>
            <div className="row my-5">
                {reviews.map((review) => (
                    <div key={review?._id} className="col-md-6 mb-5">
                        <div className="card shadow">
                            <Slider {...settings}>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                            <i className="fas fa-2x fa-quote-left text-secondary"></i>{" "}
                                            {review?.comment}
                                        </p>
                                        <footer className="blockquote-footer mt-3">
                                            {review?.userName}
                                        </footer>
                                    </blockquote>
                                </div>
                            </Slider>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
