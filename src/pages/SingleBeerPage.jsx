import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import BeerDetails from '../components/beerDetailsPage/BeerDetails';


function SingleBeerPage() {
    const [beer, setBeer] = useState({})
    const {beerId} = useParams()

    useEffect(() => {
        const url = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;
    
        const getBeer = async () => {
          const response = await axios.get(url);
          console.log(response.data);
          setBeer(response.data);
        };
    
        getBeer().catch(console.error);
      }, [beerId]);

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
  )
}

export default SingleBeerPage