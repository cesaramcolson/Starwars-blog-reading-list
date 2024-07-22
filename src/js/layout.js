import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { CharacterDetails } from "./views/CharacterDetails";
import { PlanetsDetails } from "./views/PlanetsDetails";
import { VehiclesDetails } from "./views/VehiclesDetails";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/details/character/:id" element={<CharacterDetails />} />
                        <Route path="/details/planet/:id" element={<PlanetsDetails />} />
                        <Route path="/details/vehicle/:id" element={<VehiclesDetails />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
