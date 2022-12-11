import BottomNavItems from '../../data/BottomNavItems';

import BottomListItem from './BottomListItem';

const BottomNavbar = () => {
    return (
        <ul className='bottom-nav' id='bottom-nav'>
            {
                BottomNavItems.map(({ id, dataNameIcon, goLink, iconName }) => (
                    <BottomListItem key={id} dataNameIcon={dataNameIcon} goLink={goLink} iconName={iconName} />
                ))
            }
        </ul>
    )
}

export default BottomNavbar;