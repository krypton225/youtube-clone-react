import { Link } from 'react-router-dom';

const BottomNavbar = () => {
    return (
        <ul className='bottom-nav' id='bottom-nav'>
            <li className='bottom-nav__item' data-name-icon="home">
                <Link to={""} className="bottom-nav__item-link">
                    <i className="demo-icon homeicon-"></i>
                </Link>
            </li>

            <li className='bottom-nav__item' data-name-icon="shorts">
                <Link to={""} className="bottom-nav__item-link">
                    <i className="demo-icon flash-outlineicon-"></i>
                </Link>
            </li>

            <li className='bottom-nav__item' data-name-icon="subscribes">
                <Link to={""} className="bottom-nav__item-link">
                    <i className="demo-icon th-largeicon-"></i>
                </Link>
            </li>

            <li className='bottom-nav__item' data-name-icon="library">
                <Link to={""} className="bottom-nav__item-link">
                    <i className="demo-icon desktop-1icon-"></i>
                </Link>
            </li>

            <li className='bottom-nav__item' data-name-icon="search">
                <a className="bottom-nav__item-link" href='/'>
                    <i className="demo-icon searchicon-"></i>
                </a>
            </li>
        </ul>
    )
}

export default BottomNavbar;