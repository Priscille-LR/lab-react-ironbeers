import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BeerDetails from '../components/beerDetailsPage/BeerDetails';

function RandomBeerPage() {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    const url = 'https://ih-beers-api2.herokuapp.com/beers/random';

    const getBeer = async () => {
      const response = await axios.get(url);
      console.log(response.data);
      setBeer(response.data);
    };

    getBeer().catch(console.error);
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
