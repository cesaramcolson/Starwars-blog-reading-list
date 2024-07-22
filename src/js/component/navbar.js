import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

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
            <div className="mx-5">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {store.favorites.length > 0 ? (
                            store.favorites.map((item, index) => (
                                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                    <Link to={item.url}>{item.name}</Link>
                                    <button className="btn btn-outline-danger btn-sm" onClick={() => actions.removeFavorite(item.name)}>
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </li>
                            ))
                        ) : (
                            <li className="dropdown-item">No favorites added</li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};