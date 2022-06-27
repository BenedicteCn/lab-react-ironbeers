import React from 'react'
import { useState, useEffect } from "react";     // <== IMPORT useEffect
import axios from "axios";                       // <== IMPORT axios
import './AllBeers.css'
import { Link } from "react-router-dom";



const AllBeers = () => {
  const [beers, setBeers] = useState([])


  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data)
      });

  }, [] );

  return (
    <div className='beers'>

      {beers.map((beer) => { return(
        <div key={beer._id} className="card">
        <img src={beer.image_url} alt="beer"/>
        <Link to={`/beers/${beer._id}`}><h2>{beer.name}</h2></Link>
        <p>{beer.tagline}</p>
        <p className="createdby">{beer.contributed_by}</p>
        </div>

      ) }


      )}

    </div>
  )
}

export default AllBeers
