import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewBeerPage.css'

function NewBeerPage() {
  const navigate = useNavigate();
  const [newBeer, setNewBeer] = useState({
    name: '', 
    tagline: '', 
    description: '', 
    first_brewed: '', 
    brewers_tips: '', 
    attenuation_level: '', 
    contributed_by: '', 
  })

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setNewBeer({
      ...newBeer,
      [name]: value
    })
  }

  const handleSubmit = async (e, newBeer) => {
    const API_URL = 'https://ih-beers-api2.herokuapp.com/beers/new';

    try {
      e.preventDefault();
      await axios.post(API_URL, newBeer)
      console.log(newBeer)
      navigate("/beers")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form className='new-beer-form' onSubmit={(e) => handleSubmit(e, newBeer)}>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        value={newBeer.name}
        onChange={handleChange}
      />

      <label htmlFor='tagline'>Tagline</label>
      <input
        type='text'
        name='tagline'
        value={newBeer.tagline}
        onChange={handleChange}
      />

      <label htmlFor='description'>Description</label>
      <textarea
        type='text'
        rows="5" cols="30"
        minLength="10" maxLength="400"
        name='description'
        value={newBeer.description}
        onChange={handleChange}
      />

      <label htmlFor='first_brewed'>First Brewed</label>
      <input
        type='text'
        name='first_brewed'
        value={newBeer.first_brewed}
        onChange={handleChange}
      />

      <label htmlFor='brewers_tips'>Brewer's Tips</label>
      <input
        type='text'
        name='brewers_tips'
        value={newBeer.brewers_tips}
        onChange={handleChange}
      />

      <label htmlFor='attenuation_level'>Attenuation Level</label>
      <input
        type='number'
        name='attenuation_level'
        value={newBeer.attenuation_level}
        onChange={handleChange}
      />

      <label htmlFor='contributed_by'>Contributed By</label>
      <input
        type='text'
        name='contributed_by'
        value={newBeer.contributed_by}
        onChange={handleChange}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default NewBeerPage;
