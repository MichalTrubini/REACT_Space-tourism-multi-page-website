import React, { useState } from "react";
import useWindowDimensions from '../functions/WindowDimensions';

import '../css/transport.css';

import launchVehicle from '../assets/technology/image-launch-vehicle-landscape.jpg';
import spaceport from '../assets/technology/image-spaceport-landscape.jpg';
import capsule from '../assets/technology/image-space-capsule-landscape.jpg';

import launchVehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg';
import capsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';

const Transport = () => {

    const transport = [
        {
          name: "Launch vehicle",
          images: {
            portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
            landscape: "./assets/technology/image-launch-vehicle-landscape.jpg"
          },
          description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
          name: "Spaceport",
          images: {
            portrait: "./assets/technology/image-spaceport-portrait.jpg",
            landscape: "./assets/technology/image-spaceport-landscape.jpg"
          },
          description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
          name: "Space capsule",
          images: {
            portrait: "./assets/technology/image-space-capsule-portrait.jpg",
            landscape: "./assets/technology/image-space-capsule-landscape.jpg"
          },
          description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
      ]
    
    const { width } = useWindowDimensions();
    const desktopWidth = 1100;
    
    const [vehicle, setVehicle] = useState('launch vehicle');
    
    const vehicleSelectHandler = (target) => {
        setVehicle(target);
    }

    const orderVehicle = () => {
        if (vehicle === 'launch vehicle') return 0;
        if (vehicle === 'spaceport') return 1;
        if (vehicle === 'space capsule') return 2;
    };

    const vehicleImage = () => {

      if (width < desktopWidth) {
        if (vehicle === 'launch vehicle') return launchVehicle;
        if (vehicle === 'spaceport') return spaceport;
        if (vehicle === 'space capsule') return capsule;
      }

      if (width >= desktopWidth) {
        if (vehicle === 'launch vehicle') return launchVehiclePortrait;
        if (vehicle === 'spaceport') return spaceportPortrait;
        if (vehicle === 'space capsule') return capsulePortrait;
      }
    }

    return (
        <div className="transport">
            <img src={vehicleImage()} alt="moon" className='transport__image'/>
            <div className="transport__container">
              <div className='transport__list'>
                  <button className={vehicle === 'launch vehicle' ? 'transport__button transport__button-active' :'transport__button'} onClick={() => vehicleSelectHandler('launch vehicle')}>1</button>
                  <button className={vehicle === 'spaceport' ? 'transport__button transport__button-active' :'transport__button'} onClick={() => vehicleSelectHandler('spaceport')}>2</button>
                  <button className={vehicle === 'space capsule' ? 'transport__button transport__button-active' :'transport__button'} onClick={() => vehicleSelectHandler('space capsule')}>3</button>
              </div>
              <div className="transport__text-container">
                <p className="transport__note">The terminology...</p>
                <h3 className='transport__name'>{transport[orderVehicle()].name}</h3>
                <p className='transport__description'>{transport[orderVehicle()].description}</p>
              </div>
            </div>
        </div>
    )
}

export default Transport;