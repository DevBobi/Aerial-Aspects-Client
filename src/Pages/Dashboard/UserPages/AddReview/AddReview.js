import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";

const AddReview = () => {
    const { user } = useAuth();
    const [feedbackData, setFeedBackData] = useState({});

    const handleOnBlur = (e) => {
        const comment = e.target.value;
        const feedback = { userName: user?.displayName, comment: comment };
        console.log(feedback);
        setFeedBackData(feedback);
    };

    const handleReviewSubmit = (e) => {
        if (feedbackData) {
            axios
                .post(
                    "https://intense-badlands-84836.herokuapp.com/reviews",
                    feedbackData
                )
                .then((res) => {
                    //  Showing alert
                    if (res.data.insertedId) {
                        alert("Review Added Successfully");
                        //   Form resetting
                        e.target.reset()
                    }
                });
        }
        e.preventDefault();
    };

    return (
        <div className="">
            <h2 className="text-center mt-3">
                Got any <span className="text-success">Feedback</span> Sir? <br />{" "}
                Please, Let us know!
            </h2>
            <div className="w-50 m-auto">
                <form onSubmit={handleReviewSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Username
                        </label>
                        <input
                            type="name"
                            className="form-control"
                            value={user?.displayName}
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Feedback Message
                        </label>
                        <textarea
                            onBlur={handleOnBlur}
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="6"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;
