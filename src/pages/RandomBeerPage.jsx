import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BeerDetails from '../components/beerDetailsPage/BeerDetails';

function RandomBeerPage() {
  const [beer, setBeer] = useState({});

  const getBeer = async () => {
    const API_URL = 'https://ih-beers-api2.herokuapp.com/beers/random';
    const response = await axios.get(API_URL);
    setBeer(response.data);
  }; 

  useEffect(() => {
    try {
      getBeer()
    } catch (error) {
      console.log(error)
    }
  }, []);

  return (
    <div>
      <BeerDetails
        image={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        attenuation_level={beer.attenuation_level}
        first_brewed={beer.first_brewed}
        description={beer.description}
        contributed_by={beer.contributed_by}
      />
    </div>
  );
}

export default RandomBeerPage;
