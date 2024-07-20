import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <div>
                <Link to="/">
                    <img 
                        src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png"
                        className="card-img-top mx-4" 
                        alt="Card image" 
                        style={{ width: "150px" }}
                    />
                </Link>
            </div>
            <div className="ml-auto">
                {/* Here we need a dropdown menu to add favorites */}
            </div>
        </nav>
    );
};