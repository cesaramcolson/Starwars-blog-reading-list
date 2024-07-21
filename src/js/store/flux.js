const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            peopleInfo: {},
            planets: [],
            planetsInfo: {},
            vehicles: [],
            vehiclesInfo: {}
        },
        actions: {
            getPeople: async () => {
                try {
                    const resp = await fetch("https://www.swapi.tech/api/people?page=1&limit=12", {
                        method: "GET",
                        headers: {
                            "Content-type": "application/json"
                        }
                    });
                    if (!resp.ok) {
                        throw new Error(`error status: ${resp.status}`);
                    }
                    let data = await resp.json();
                    setStore({ people: data.results });
                } catch (error) {
                    console.error("Error");
                }
            },
            getPeopleInfo: async (id) => {
                try {
                    const resp = await fetch(`https://www.swapi.tech/api/people/${id}`, {
                        method: "GET",
                        headers: {
                            "Content-type": "application/json"
                        }
                    });
                    if (!resp.ok) {
                        throw new Error(`error status: ${resp.status}`);
                    }
                    let data = await resp.json();
                    setStore({ peopleInfo: { ...getStore().peopleInfo, [id]: data.result.properties } });
                } catch (error) {
                    console.error("Error");
                }
            },
            getPlanets: async () => {
                try {
                    const resp = await fetch("https://www.swapi.tech/api/planets?page=2&limit=6", {
                        method: "GET",
                        headers: {
                            "Content-type": "application/json"
                        }
                    });
                    if (!resp.ok) {
                        throw new Error(`error status: ${resp.status}`);
                    }
                    let data = await resp.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.error("Error");
                }
            },
            getPlanetsInfo: async (id) => {
                try {
                    const resp = await fetch(`https://www.swapi.tech/api/planets/${id}`, {
                        method: "GET",
                        headers: {
                            "Content-type": "application/json"
                        }
                    });
                    if (!resp.ok) {
                        throw new Error(`error status: ${resp.status}`);
                    }
                    let data = await resp.json();
                    setStore({ planetsInfo: { ...getStore().planetsInfo, [id]: data.result.properties } });
                } catch (error) {
                    console.error("Error");
                }
            },
            getVehicles: async () => {
                try {
                    const resp = await fetch("https://www.swapi.tech/api/vehicles?page=1&limit=10", {
                        method: "GET",
                        headers: {
                            "Content-type": "application/json"
                        }
                    });
                    if (!resp.ok) {
                        throw new Error(`error status: ${resp.status}`);
                    }
                    let data = await resp.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.error("Error");
                }
            },
            getVehiclesInfo: async (id) => {
                try {
                    const resp = await fetch(`https://www.swapi.tech/api/vehicles/${id}`, {
                        method: "GET",
                        headers: {
                            "Content-type": "application/json"
                        }
                    });
                    if (!resp.ok) {
                        throw new Error(`error status: ${resp.status}`);
                    }
                    let data = await resp.json();
                    setStore({ vehiclesInfo: { ...getStore().vehiclesInfo, [id]: data.result.properties } });
                } catch (error) {
                    console.error("Error");
                }
            }
        }
    };
};

export default getState;