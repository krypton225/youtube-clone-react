import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import { YoutubeLogo } from "../";
import AvatarImage from "../../assets/images/avatar.jpeg";

const Navbar = () => {
    return (
        <nav className='navbar' id='navbar'>
            <div className="navbar__logo">
                <div className="navbar__logo__hamburger">
                    <MenuIcon />
                </div>

                <div className="navbar__logo__pic" title='Youtube'>
                    <YoutubeLogo />
                </div>

                <span className="navbar__logo__country"></span>
            </div>

            <form className="navbar__search">
                <div className="navbar__search__container">
                    <input type="text" name="search" className="navbar__search__container__input" placeholder='search..' />
                    <button type="submit" className="navbar__search__container__btn" title="Search" data-name-icon="Search">
                        <SearchIcon />
                    </button>
                </div>

                <div className="navbar__search__voice" data-name-icon="Search with your voice">
                    <KeyboardVoiceIcon />
                </div>
            </form>

            <div className="navbar__functions">
                <div className="navbar__functions__video" data-name-icon="Create">
                    <VideoCallIcon />
                </div>

                <div className="navbar__functions__notifications" data-name-icon="Notifications">
                    <NotificationsNoneIcon />
                </div>

                <div className="navbar__functions__avatar">
                    <img src={AvatarImage} alt="Avatar" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;