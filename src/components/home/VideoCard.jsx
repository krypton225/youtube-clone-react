import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import CardInfo from "./CardInfo";
import Thumbnail from "./Thumbnail";

const VideoCard = ({ videoId, channelTitle, publishTime, title, medium }) => {
    useEffect(() => {
        AOS.init({
            duration: 400
        });
    }, []);

    return (
        <a className="home__videos__card" href={`https://www.youtube.com/watch?v=${videoId}`} data-aos="zoom-out">
            <Thumbnail thumbImage={medium.url} />
            <CardInfo channelTitle={channelTitle} publishTime={publishTime} title={title} />
        </a>
    )
}

export default VideoCard;