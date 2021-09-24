import React, { useEffect, useState}  from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function RandomBeer() {

    const [beer, setBeer] = useState({})

    useEffect(() => {
        async function getBeerDetails() {
            
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
            setBeer(response.data);
        }

        getBeerDetails();       
    }, [])


    return (
        <>
            <NavLink className="link" activeStyle={{ color: "red" }} exact to="/">
                <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" /> 
            </NavLink>

            <h2>Random Beer</h2>

            {beer.name ? (
                <> 
                    <img src={beer.image_url} alt={beer.name} />
                    <h2>{beer.name}</h2>
                    
                    <p>{beer.tagline}</p>
                    <p>{beer.first_brewed}</p>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>

                </>

                ) : (

                    <p>Loading...</p>

                )}
        </>
    )
}

export default RandomBeer;