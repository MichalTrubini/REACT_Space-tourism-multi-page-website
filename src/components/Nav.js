import Menu from './Menu';
import useWindowDimensions from '../functions/WindowDimensions';

import '../css/nav.css';

const Nav = () => {

    const { width } = useWindowDimensions();

    return (
        <nav className='nav'>
            {width > 1159 && <div className='divider'></div>}
             <Menu />
        </nav>
    )
    }

export default Nav;