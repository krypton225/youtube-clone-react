import CardInfo from "./CardInfo";
import Thumbnail from "./Thumbnail";

const VideoCard = ({ videoId, channelTitle, publishTime, title, medium }) => {
    return (
        <a className="home__videos__card" href={`https://www.youtube.com/watch?v=${videoId}`}>
            <Thumbnail thumbImage={medium.url} />
            <CardInfo channelTitle={channelTitle} publishTime={publishTime} title={title} />
        </a>
    )
}

export default VideoCard;