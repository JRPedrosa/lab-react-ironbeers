import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function NewBeer() {

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState("");
    const [contributedBy, setContributedBy] = useState("");


    const history = useHistory();

    const handleFormSubmit = async (e) => {

        e.preventDefault();

        const body = {
            name: name,  //could be just title,  => same key and value
            tagline: tagline,
            description: description,
            brewers_tips: brewersTips,
            first_brewed: firstBrewed,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy,
        }

        await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body);

        // setImage("");
        // setTitle("");
        // setPrice("");

        // console.log("apartment created");

        history.push("/beers")
    }    

    return (
        <> 
            <NavLink className="link" activeStyle={{ color: "red" }} exact to="/">
                <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" /> 
            </NavLink>

            <h2>Create a Beer</h2>

            <form onSubmit={handleFormSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />

                <label>Tagline</label>
                <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)}  />

                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

                <label>First Brewed</label>
                <input type="text" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)} />

                <label>Brewers Tips</label>
                <input type="text" value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)} />

                <label>Attenuation Level</label>
                <input type="number" value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)} />

                <label>Contributed by</label>
                <input type="text" value={contributedBy} onChange={(e) => setContributedBy(e.target.value)} />

                <button type="submit">Create</button>
            </form>

        </>
    )
}

export default NewBeer;