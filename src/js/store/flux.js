const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            peopleInfo: {}
        },
        actions: {
            getPeople: async () => {
                try {
                    const resp = await fetch("https://www.swapi.tech/api/people?page=1&limit=82", {
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
            }
        }
    };
};

export default getState;
