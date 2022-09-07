import React from 'react';
import allBeers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';
import HomePageCard from '../components/homePageCard/HomePageCard';

function HomePage() {
  const homepageContents = [
    {
      endpoint: '/beers',
      image: allBeers,
      title: 'All Beers',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia mi a maximus rhoncus. Fusce eget turpis ultrices, ullamcorper elit vitae, mollis est. Donec tincidunt, nisl et porta imperdiet, erat metus posuere lorem, eget facilisis nulla justo eget nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    },
    {
      endpoint: '/random-beer',
      image: randomBeer,
      title: 'Random Beer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia mi a maximus rhoncus. Fusce eget turpis ultrices, ullamcorper elit vitae, mollis est. Donec tincidunt, nisl et porta imperdiet, erat metus posuere lorem, eget facilisis nulla justo eget nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    },
    {
      endpoint: '/new-beer',
      image: newBeer,
      title: 'New Beer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia mi a maximus rhoncus. Fusce eget turpis ultrices, ullamcorper elit vitae, mollis est. Donec tincidunt, nisl et porta imperdiet, erat metus posuere lorem, eget facilisis nulla justo eget nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    },
  ];

  return (
    <div>
      {homepageContents.map(({ endpoint, image, title, text }) => (
        <HomePageCard
          key={title}
          endpoint={endpoint}
          image={image}
          title={title}
          text={text}
        />
      ))}
    </div>
  );
}

export default HomePage;
