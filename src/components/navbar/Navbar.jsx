import { MainLogo, VideoNavbar, NotificationsNavbar, AvatarNavbar } from './';

const Navbar = () => (
    <nav className='navbar' id='navbar'>
        <div className="container">
            <div className="row">
                <div className="navbar__logo">
                    <MainLogo />
                </div>

                <div className="navbar__functions">
                    <VideoNavbar />
                    <NotificationsNavbar />
                    <AvatarNavbar />
                </div>
            </div>
        </div>
    </nav>
);

export default Navbar;