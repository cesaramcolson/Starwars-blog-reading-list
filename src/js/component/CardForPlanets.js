import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardForPlanets = (props) => {
    const { actions, store } = useContext(Context);
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            await actions.getPlanetsInfo(props.planet.uid);
            setDetails(store.planetsInfo[props.planet.uid]);
        };

        fetchDetails();
    }, [props.planet.uid, store.planetsInfo]);

    return (
        <div className="card col-12 col-md m-3" style={{ minWidth: "300px" }}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.planet.uid}.jpg`} className="card-img-top" alt="Card image" />
            <div className="card-body">
                <h5 className="card-title">{props.planet.name}</h5>
                {details ? (
                    <>
                        <p className="card-text">Climate: {details.climate}</p>
                        <p className="card-text">Diameter: {details.diameter}</p>
                        <p className="card-text">Gravity: {details.gravity}</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/details/${props.planet.uid}`} className="btn btn-primary">Learn more!</Link>
                    <button className="btn btn-warning" onClick={() => actions.addFavorite(props.planet.name, `/details/${props.planet.uid}`)}>
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};