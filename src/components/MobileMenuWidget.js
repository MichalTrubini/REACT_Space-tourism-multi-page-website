import '../css/mobileMenu.css';
import close from '../assets/shared/icon-close.svg';

const MobileMenuWidget = () => {
    return (
        <div className='mobile-menu'>
            <div className='mobile-menu__close-container'>
                <img src={close} alt="close menu" className='mobile-menu__close'/>
            </div>
            <ul className='mobile-menu__list'>
                <li className='mobile-menu__list-item'><a className='mobile-menu__link' href='x'><span className='mobile-menu__link--bold'>00</span> home</a></li>
                <li className='mobile-menu__list-item'><a className='mobile-menu__link' href='x'><span className='mobile-menu__link--bold'>01</span> destination</a></li>
                <li className='mobile-menu__list-item'><a className='mobile-menu__link' href='x'><span className='mobile-menu__link--bold'>02</span> crew</a></li>
                <li className='mobile-menu__list-item'><a className='mobile-menu__link' href='x'><span className='mobile-menu__link--bold'>03</span> technology</a></li>
            </ul>
        </div>
    )
}

export default MobileMenuWidget;