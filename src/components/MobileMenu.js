import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import '../css/nav.css';
import '../css/mobileMenu.css';

import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';
import close from '../assets/shared/icon-close.svg';

const MobileMenu = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    const ShowMenuHandler = () => {
        setMenuVisible(true);
    }

    const HideMenuHandler = () => {
        setMenuVisible(false);
    }

    return (
        <>
            <div className='nav__img-container'>
                <Link to="/" exact><img src={logo} alt="space"/></Link>
            </div>
            <div className='nav__hamburger-container'>
                <img src={hamburger} alt="open menu" onClick={ShowMenuHandler}/>
            </div>
            <div className={(menuVisible && 'mobile-menu mobile-menu__visible') || 'mobile-menu'}>
            <div className='mobile-menu__close-container'>
                <img src={close} alt="close menu" className='mobile-menu__close' onClick={HideMenuHandler}/>
            </div>
            <ul className='mobile-menu__list'>
                <li className='mobile-menu__list-item'><Link to="/" className='mobile-menu__link' onClick={HideMenuHandler}><span className='mobile-menu__link--bold'>00</span> home</Link></li>
                <li className='mobile-menu__list-item'><Link to="/destination" className='mobile-menu__link' onClick={HideMenuHandler}><span className='mobile-menu__link--bold'>01</span> destination</Link></li>
                <li className='mobile-menu__list-item'><Link to="/crew" className='mobile-menu__link' onClick={HideMenuHandler}><span className='mobile-menu__link--bold'>02</span> crew</Link></li>
                <li className='mobile-menu__list-item'><Link to="/technology" className='mobile-menu__link' onClick={HideMenuHandler}><span className='mobile-menu__link--bold'>03</span> technology</Link></li>
            </ul>
        </div>
        </>
    )
}

export default MobileMenu;