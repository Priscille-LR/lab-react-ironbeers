import React from 'react';
import { Link } from 'react-router-dom';
import './BeerCard.css';

function BeerCard({ _id, image, name, tagline, contributed_by }) {
  return (
    <Link to={`/beers/${_id}`} className='beer-card'>
      <img src={image} alt='' />
      <div className='beer-card-text'>
        <h2>{name}</h2>
        <h3>{tagline}</h3>
        <p><strong>Created by :</strong> {contributed_by ? contributed_by.split('<')[0] : 'unknown'}</p>
      </div>
    </Link>
  );
}

export default BeerCard;
