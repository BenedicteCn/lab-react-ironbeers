import React from 'react'
import { useState, useEffect } from "react";     // <== IMPORT useEffect
import { useParams } from 'react-router-dom';
import axios from "axios";                       // <== IMPORT axios


const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState([])
  const params = useParams();

  useEffect(() => {
    console.log(params.beerId)
    let config = {
      method: 'get',
      url: `https://ih-beers-api2.herokuapp.com/beers/random`,
    };
    axios(config)
      .then((response) => {
        console.log('response.data', response.data);
        setRandomBeer(response.data)
      });

  }, [params.beerId] );

  return (
    <div className='beers'>
      <p><img src={randomBeer.image_url} alt=""/></p>
      <p>{randomBeer.name}</p>
      <p>{randomBeer.tagline}</p>
      <p>{randomBeer.first_brewed}</p>
      <p>{randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>{randomBeer.contributed_by}</p>

    </div>
  )
}


export default RandomBeer
