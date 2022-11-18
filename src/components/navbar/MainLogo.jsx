import { useEffect, useState } from 'react';
import axios from 'axios';

import { YoutubeLogo } from "../";

import { API_GET_CURRENT_CITY } from '../generals/constants';

const MainLogo = () => {
    const [country, setCountry] = useState("");

    useEffect(() => {
        axios.get(API_GET_CURRENT_CITY)
            .then((data) => {
                setCountry(data.data.countryCode);
            }).catch((err) => {
                setCountry("");
            });
    }, []);

    return (
        <div className="navbar__logo__pic" title='Youtube'>
            <YoutubeLogo />
            <span className="navbar__logo__pic__country">{country}</span>
        </div>
    )
}


export default MainLogo;