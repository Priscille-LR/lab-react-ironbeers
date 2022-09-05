import React from 'react';
import './BeerDetails.css';

function BeerDetails({
  image,
  name,
  tagline,
  attenuation_level,
  first_brewed,
  description,
  contributed_by,
}) {
  return (
    <div className='beer-details'>
      <img src={image} alt='' />
      <div className='heading'>
        <div className='name-tagline'>
          <h1 className='name'>{name}</h1>
          <h3 className='tagline'>{tagline}</h3>
        </div>
        <div className='info'>
          <h2 className='attenuation-level'>{attenuation_level}</h2>
          <p className='first-brewed'>{first_brewed}</p>
        </div>
      </div>
      <p className='description'>{description}</p>
      <p className='created-by'>
        <strong>Created by :</strong>{' '}
        {contributed_by ? contributed_by.split('<')[0] : 'unknown'}
      </p>
    </div>
  );
}

export default BeerDetails;
