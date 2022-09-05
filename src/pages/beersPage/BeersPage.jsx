import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../components/spinner/Spinner'
import BeerCard from '../../components/beerCard/BeerCard';
import './BeersPage.css'

function BeersPage() {
    const [beers, setBeers] = useState([]);
    const [fetching, setFetching] = useState(true);
  
    useEffect(() => {
      const url = 'https://ih-beers-api2.herokuapp.com/beers';
  
      const getAllBeers = async () => {
        const response = await axios.get(url)
        console.log(response.data)
        setBeers(response.data)
        setFetching(false)
      };
  
      getAllBeers().catch(console.error)
    }, []);
  
    return (
      <div className='beers-page'>
      {fetching && <Spinner/>}
  
        {beers.map(({ _id, image_url, name, tagline, contributed_by }) => (
          <BeerCard
            key={_id}
            _id = {_id}
            image={image_url}
            name={name}
            tagline={tagline}
            contributed_by={contributed_by}
          />
        ))}
      </div>
    );
}

export default BeersPage