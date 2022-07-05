import React, { useState } from 'react';

import '../css/members.css';
import douglas from '../assets/crew/image-douglas-hurley.webp';
import anousheh from '../assets/crew/image-anousheh-ansari.webp';
import mark from '../assets/crew/image-mark-shuttleworth.webp';
import victor from '../assets/crew/image-victor-glover.webp';

const Members = () => {

    const crew = [
        {
          name: "Douglas Hurley",
          images: {
            png: "./assets/crew/image-douglas-hurley.png",
            webp: "./assets/crew/image-douglas-hurley.webp"
          },
          role: "Commander",
          bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
          name: "Mark Shuttleworth",
          images: {
            png: "./assets/crew/image-mark-shuttleworth.png",
            webp: "./assets/crew/image-mark-shuttleworth.webp"
          },
          role: "Mission Specialist",
          bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
          name: "Victor Glover",
          images: {
            png: "./assets/crew/image-victor-glover.png",
            webp: "./assets/crew/image-victor-glover.webp"
          },
          role: "Pilot",
          bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
          name: "Anousheh Ansari",
          images: {
            png: "./assets/crew/image-anousheh-ansari.png",
            webp: "./assets/crew/image-anousheh-ansari.webp"
          },
          role: "Flight Engineer",
          bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
      ]

    const [crewMember, setCrewMember] = useState('douglas');
    
    const memberSelectHandler = (target) => {
        setCrewMember(target);
    }

    const orderCrew = () => {
        if (crewMember === 'douglas') return 0;
        if (crewMember === 'mark') return 1;
        if (crewMember === 'victor') return 2;
        if (crewMember === 'anousheh') return 3;
    };

    const crewImage = () => {
        if (crewMember === 'douglas') return douglas;
        if (crewMember === 'anousheh') return anousheh;
        if (crewMember === 'mark') return mark;
        if (crewMember === 'victor') return victor;
    }

    return (
        <div className="member">
            <div className='member__img-container'>
              <img src={crewImage()} alt="moon" className='member__image'/>
            </div>
            <div className='member__list'>
                <button className={crewMember === 'douglas' ? 'member__button member__button-selected' : 'member__button'} onClick={() => memberSelectHandler('douglas')} />
                <button className={crewMember === 'anousheh' ? 'member__button member__button-selected' : 'member__button'} onClick={() => memberSelectHandler('anousheh')}/>
                <button className={crewMember === 'mark' ? 'member__button member__button-selected' : 'member__button'} onClick={() => memberSelectHandler('mark')}/>
                <button className={crewMember === 'victor' ? 'member__button member__button-selected' : 'member__button'} onClick={() => memberSelectHandler('victor')}/>
            </div>
            <h2 className='member__role'>{crew[orderCrew()].role}</h2>
            <h3 className='member__name'>{crew[orderCrew()].name}</h3>
            <p className='member__bio'>{crew[orderCrew()].bio}</p>
        </div>
    )
}

export default Members;