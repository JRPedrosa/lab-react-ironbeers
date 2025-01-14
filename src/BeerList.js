import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function BeerList() {

    const [beers, setBeers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        if (!search) {
        async function getAllBeers() {
           const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
        //    console.log("set state");
           setBeers(response.data);
        }

        getAllBeers();
       }


        async function filterBeers() {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
            setBeers(response.data);
        }

        filterBeers();



    }, [search])

    // console.log("render", apartments.length);


    return (
        <>
            <NavLink className="link" activeStyle={{ color: "red" }} exact to="/">
                <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" /> 
            </NavLink>

            <form>

                <label>Search</label>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}  />

            </form>

            <ul>
                <h2>List of Beers</h2>
                
                {beers.length > 0 ? (
                    beers.map((beer, index) => {
                    return <li key={index}>

                                <img src={beer.image_url} />

                                <NavLink to={`/beers/${beer._id}`}>

                                    {beer.name}
                                    
                                </NavLink>

                                <p>{beer.tagline}</p>
                                <p>Created by: {beer.contributed_by}</p>
                                
                            </li>
                })
                ) : (
                    <p>Loading...</p>
                    
                )}
            </ul>


        </>
    )


}

export default BeerList;