import React from 'react';
import { Link } from 'react-router-dom';
import './HomePageCard.css'

function HomePageCard({ endpoint, image, title, text }) {
  return (
    <div className='homepage-card'>
      <Link to={endpoint} className='homepage-card-link'>
        <img src={image} alt='' />
        <h1>{title}</h1>
        <p>{text}</p>
      </Link>
    </div>
  );
}

export default HomePageCard;
