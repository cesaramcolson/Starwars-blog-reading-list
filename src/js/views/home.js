import React, { useContext } from "react";
import { Card } from "../component/CardForCharacters";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
    const { store } = useContext(Context);

    const eachCharacter = store.people.map((people, index) => (
        <Card key={index} people={people} />
    ));

    return (
        <>
            <div className="m-5">
                <h1>Characters</h1>
                <div className="scrollmenu d-flex">
                    {eachCharacter}
                </div>
            </div>
            <div className="m-5">
                <h1>Planets</h1>
                <div className="scrollmenu d-flex">
                    {/* {eachCharacter} */}
                </div>
            </div>
            <div className="m-5">
                <h1>Vehicles</h1>
                <div className="scrollmenu d-flex">
                    {/* {eachCharacter} */}
                </div>
            </div>
        </>
    );
};