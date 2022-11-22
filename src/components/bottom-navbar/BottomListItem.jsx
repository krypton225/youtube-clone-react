import { Link } from "react-router-dom";

const BottomListItem = ({ dataNameIcon, goLink, iconName }) => {
    return (
        <>
            <li className='bottom-nav__item' data-name-icon={`${dataNameIcon}`}>
                <Link className="bottom-nav__item-link" to={goLink}>
                    <i className={`demo-icon ${iconName}-`}></i>
                </Link>
            </li>
        </>
    )
}

export default BottomListItem;