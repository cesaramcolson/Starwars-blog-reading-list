import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = (props) => {
    const { actions, store } = useContext(Context);
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            await actions.getPeopleInfo(props.people.uid);
            setDetails(store.peopleInfo[props.people.uid]);
        };

        fetchDetails();
    }, [props.people.uid, store.peopleInfo]);

    return (
        <div className="card col-12 col-md m-3" style={{ minWidth: "300px" }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.people.uid}.jpg`} className="card-img-top" alt="Card image" />
            <div className="card-body">
                <h5 className="card-title">{props.people.name}</h5>
                {details ? (
                    <>
                        <p className="card-text">Gender: {details.gender}</p>
                        <p className="card-text">Hair Color: {details.hair_color}</p>
                        <p className="card-text">Eye Color: {details.eye_color}</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/details/${props.people.uid}`} className="btn btn-primary">Learn more!</Link>
                    <button className="btn btn-warning" onClick={() => actions.addFavorite(props.people.name, `/details/${props.people.uid}`)}>
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};