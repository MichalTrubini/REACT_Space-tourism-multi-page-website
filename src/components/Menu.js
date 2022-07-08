import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import '../css/nav.css';
import '../css/Menu.css';

import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';
import close from '../assets/shared/icon-close.svg';

import useWindowDimensions from '../functions/WindowDimensions';

const Menu = () => {

    const [menuVisible, setMenuVisible] = useState(false);
    const [page, setPage] = useState('home');

    const ShowMenuHandler = () => {
        setMenuVisible(true);
    }

    const HideMenuHandler = (target) => {
        setMenuVisible(false);
        setPage(target);
    }

    const { height, width } = useWindowDimensions();
    const mobileBreak = 550;
    const tabletViewport = 768;

    const mobileMenuclasses = () => {
        if (width < mobileBreak) {return (menuVisible && 'menu mobile-menu mobile-menu__visible') || 'menu mobile-menu'}
        if (width >= mobileBreak) {return 'menu'}
    }

    return (
        <>
            <div className='nav__img-container'>
                <Link to="/" exact><img src={logo} alt="space"/></Link>
            </div>
            {
            width < mobileBreak &&
            <div className='nav__hamburger-container'>
                <img src={hamburger} alt="open menu" onClick={ShowMenuHandler}/>
            </div>
            }
            <div className={mobileMenuclasses()} style={width < mobileBreak ? {minHeight:height} : undefined}>
                {
                width < mobileBreak  && 
                <div className='mobile-menu__close-container'>
                    <img src={close} alt="close menu" className='mobile-menu__close' onClick={HideMenuHandler}/>
                </div>
                }
                <ul className='menu__list'>
                    <li className='menu__list-item'><Link to="/" className={(page  === 'home' & width >= tabletViewport) ? 'menu__link menu__link-active' : 'menu__link'} onClick={() => HideMenuHandler('home')}><span className='menu__link--bold'>00</span> home</Link></li>
                    <li className='menu__list-item'><Link to="/destination" className={(page  === 'destination' & width >= tabletViewport) ? 'menu__link menu__link-active' : 'menu__link'} onClick={() => HideMenuHandler('destination')}><span className='menu__link--bold'>01</span> destination</Link></li>
                    <li className='menu__list-item'><Link to="/crew" className={(page  === 'crew' & width >= tabletViewport) ? 'menu__link menu__link-active' : 'menu__link'} onClick={() => HideMenuHandler('crew')}><span className='menu__link--bold'>02</span> crew</Link></li>
                    <li className='menu__list-item'><Link to="/technology" className={(page  === 'technology' & width >= tabletViewport) ? 'menu__link menu__link-active' : 'menu__link'} onClick={() => HideMenuHandler('technology')}><span className='menu__link--bold'>03</span> technology</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Menu;