import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <ul className="footer-list">
                <li className="footer-item">
                    <a className="navbar-brand text-info brand-logo" href="/">
                        <i class="fab fa-atlassian"></i>erial Aspects
                    </a>
                    <p className="my-3">
                        Aerial Aspests was established in 1982, one of Bangladesh’s oldest travel
                        agencies.
                    </p>

                    <p className="footer-social">
                        Follow Us{" "}
                        <span className="ms-3">
                            <a href="/">
                                <i className="footer-social-icon fab fa-facebook-f"></i>
                            </a>
                            <a href="/">
                                <i className="footer-social-icon fab fa-instagram"></i>
                            </a>

                            <a href="/">
                                <i className="footer-social-icon fab fa-twitter"></i>
                            </a>
                            <a href="/">
                                <i className="footer-social-icon fab fa-pinterest"></i>
                            </a>
                        </span>
                    </p>
                </li>
                <li className="footer-item">
                    <h4>Useful Links</h4>
                    <a href="/">About</a>
                    <a href="/">Login</a>
                    <a href="/">News & Events</a>
                    <a href="/">Contacts</a>
                </li>
                <li className="footer-item footer-item-contact">
                    <h4>Contact With Us</h4>
                    <span>
                        <i className="fas fa-mobile-alt"></i> +8801864611120
                    </span>
                    <span>
                        <i className="fas fa-envelope"></i> support@aerialaspects.com
                    </span>

                    <form className="input-group">
                        <input
                            type="text"
                            width="25%"
                            class="form-control"
                            placeholder="Your Email"
                        />
                        <button class="btn btn-outline-info" type="button">Button</button>
                    </form>
                </li>
            </ul>
            <hr />

            <ul className="footer-bottom-list">
                {/* <li className="footer-bottom-list--item mb-3 mb-lg-0">
                    <img src={cards} alt="" />
                </li> */}
                <li className="footer-bottom-list--item">
                    <small>
                        Terms & Condition | Privacy & Policy | &copy;2021
                    </small>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;