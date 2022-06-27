import React from 'react'
import { useState, useEffect } from "react";     // <== IMPORT useEffect
import { useParams } from 'react-router-dom';
import axios from "axios";                       // <== IMPORT axios



const Onebeer = () => {
  const [oneBeer, setOneBeer] = useState([])
  const params = useParams();


  useEffect(() => {
    let config = {
      method: 'get',
      url: `https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`,
    };
    axios(config)
      .then((response) => {
        console.log('response.data', response.data);
        setOneBeer(response.data)
      });

  }, [params.beerId] );

  return (
    <div className='beers'>
      <p><img src={oneBeer.image_url} alt=""/></p>
      <p>{oneBeer.name}</p>
      <p>{oneBeer.tagline}</p>
      <p>{oneBeer.first_brewed}</p>
      <p>{oneBeer.attenuation_level}</p>
      <p>{oneBeer.description}</p>
      <p>{oneBeer.contributed_by}</p>

    </div>
  )
}


export default Onebeer
