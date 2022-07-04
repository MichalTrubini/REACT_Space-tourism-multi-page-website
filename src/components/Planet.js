import React, { useState } from 'react';

import '../css/planet.css';
import moon from '../assets/destination/image-moon.webp';
import mars from '../assets/destination/image-mars.webp';
import europa from '../assets/destination/image-europa.webp';
import titan from '../assets/destination/image-titan.webp';

const Planet = () => {

    const destinations =  [
        {
          name: "Moon",
          images: "../../public/assets/destination/image-moon.webp",
          description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          distance: "384,400 km",
          travel: "3 days"
        },
        {
          name: "Mars",
          images: {
            png: "../assets/destination/image-mars.png",
            webp: "../assets/destination/image-mars.webp"
          },
          description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          distance: "225 mil. km",
          travel: "9 months"
        },
        {
          name: "Europa",
          images: {
            png: "../assets/destination/image-europa.png",
            webp: "../assets/destination/image-europa.webp"
          },
          description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          distance: "628 mil. km",
          travel: "3 years"
        },
        {
          name: "Titan",
          images: {
            png: "../assets/destination/image-titan.png",
            webp: "../assets/destination/image-titan.webp"
          },
          description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          distance: "1.6 bil. km",
          travel: "7 years"
        }
      ]

    const [planet, setPlanet] = useState('moon');
    
    const planetSelectHandler = (target) => {
        setPlanet(target);
    }

    const orderPlanet = () => {
        if (planet === 'moon') return 0;
        if (planet === 'mars') return 1;
        if (planet === 'europa') return 2;
        if (planet === 'titan') return 3;
    };

    const planetImage = () => {
        if (planet === 'moon') return moon;
        if (planet === 'mars') return mars;
        if (planet === 'europa') return europa;
        if (planet === 'titan') return titan;
    }

    return (
        <div className="planet">
            <img src={planetImage()} alt="moon" className='planet__image'/>
            <div className='planet__list'>
                <button className='planet__item' onClick={() => planetSelectHandler('moon')}>Moon</button>
                <button className='planet__item' onClick={() => planetSelectHandler('mars')}>Mars</button>
                <button className='planet__item' onClick={() => planetSelectHandler('europa')}>Europa</button>
                <button className='planet__item' onClick={() => planetSelectHandler('titan')}>Titan</button>
            </div>
            <h2 className='planet__heading'>{destinations[orderPlanet()].name}</h2>
            <p className='planet__description'>{destinations[orderPlanet()].description}</p>
            <div className='planet__specs'>
                <div>
                    <p className='planet__specs-title'>avg. distance</p>
                    <h3 className='planet__specs-content'>{destinations[orderPlanet()].distance}</h3>
                </div>
                <div>
                    <p className='planet__specs-title'>est. travel time</p>
                    <h3 className='planet__specs-content'>{destinations[orderPlanet()].travel}</h3>
                </div>
            </div>
        </div>
    )
}

export default Planet;