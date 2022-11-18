import { TogglerNavbar, MainLogo, SearchInput, VoiceSearch, VideoNavbar, NotificationsNavbar, AvatarNavbar } from './';

const Navbar = () => (
    <nav className='navbar' id='navbar'>
        <div className="navbar__logo">
            <TogglerNavbar />
            <MainLogo />
        </div>

        <form className="navbar__search" autoComplete='off'>
            <SearchInput />
            <VoiceSearch />
        </form>

        <div className="navbar__functions">
            <VideoNavbar />
            <NotificationsNavbar />
            <AvatarNavbar />
        </div>
    </nav>
);

export default Navbar;