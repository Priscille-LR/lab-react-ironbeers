import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewBeerPage.css'

function NewBeerPage() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState('');
  const [contributedBy, setContributedBy] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'https://ih-beers-api2.herokuapp.com/beers/new';
    const body = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    console.log(body)

    axios.post(url, body)
    .then((_) => {
      console.log(body)
    .catch(err => console.log(err))

      setName('');
      setTagline('');
      setDescription('');
      setFirstBrewed('');
      setBrewersTips('');
      setAttenuationLevel(0);
      setContributedBy('')

      navigate("/beers")
    });
  };

  return (
    <form className='new-beer-form' onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor='tagline'>Tagline</label>
      <input
        type='text'
        name='tagline'
        value={tagline}
        onChange={(e) => setTagline(e.target.value)}
      />

      <label htmlFor='description'>Description</label>
      <textarea
        type='text'
        rows="5" cols="30"
        minLength="10" maxLength="400"
        name='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor='first_brewed'>First Brewed</label>
      <input
        type='text'
        name='first_brewed'
        value={firstBrewed}
        onChange={(e) => setFirstBrewed(e.target.value)}
      />

      <label htmlFor='brewers_tips'>Brewer's Tips</label>
      <input
        type='text'
        name='brewers_tips'
        value={brewersTips}
        onChange={(e) => setBrewersTips(e.target.value)}
      />

      <label htmlFor='attenuation_level'>Attenuation Level</label>
      <input
        type='number'
        name='attenuation_level'
        value={attenuationLevel}
        onChange={(e) => setAttenuationLevel(e.target.value)}
      />

      <label htmlFor='contributed_by'>Contributed By</label>
      <input
        type='text'
        name='contributed_by'
        value={contributedBy}
        onChange={(e) => setContributedBy(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default NewBeerPage;
