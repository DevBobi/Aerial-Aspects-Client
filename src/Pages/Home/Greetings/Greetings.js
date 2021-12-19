import React from "react";
import "animate.css";
import mottoimg from "../../../Images/Banners/Greeting.jpg";

const Greetings = () => {
    return (
        <div>
            <div className="row mb-5 g-0 container-fluid">
                <div className="bg-info text-white">
                    {" "}
                    <h1 className="animate__animated animate__bounceInDown text-center py-5">
                        # W e l c o m e
                    </h1>
                </div>
                <div className="col-sm-4">
                    <img className="w-100 h-100" src={mottoimg} alt="" />
                </div>
                <div className="col-sm-8 bg-secondary text-white">
                    <div className="text-center p-5">
                        <h1 className="animate__animated animate__bounceInDown">
                            <i class="fab fa-atlassian"></i>erial Aspects
                        </h1>
                    </div>
                    <h3 className="animate__animated animate__rubberBand text-center p-5">
                        Looking for high end Drones? <br /> Then you're just few clicks away!
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Greetings;
