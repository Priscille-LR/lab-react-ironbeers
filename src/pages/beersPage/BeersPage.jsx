import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../components/spinner/Spinner'
import BeerCard from '../../components/beerCard/BeerCard';
import SearchBar from '../../components/searchBar/SearchBar';
import './BeersPage.css'

function BeersPage() {
    const [beers, setBeers] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [search, setSearch] = useState('');

    const getBeers = async (url) => {
      const response = await axios.get(url)
      setBeers(response.data)
      setFetching(false)
    } 

    useEffect(() => {
      if(search === ''){
        getBeers('https://ih-beers-api2.herokuapp.com/beers')
      } else {
        getBeers(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
      }
    }, [search])

    const handleSearch = (e) => setSearch(e.target.value.toLowerCase());
  
    return (
      <div className='beers-page'>
      {fetching && <Spinner/>}

      <SearchBar search={search} handleSearch={handleSearch}/>
  
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