import CardDate from "./CardDate";
import CardExtraInfo from "./CardExtraInfo";

const CardInfo = ({ channelTitle, publishTime, title }) => (
    <div className="home__videos__card__info">
        <CardExtraInfo title={title} channelTitle={channelTitle} />
        <CardDate publishTime={publishTime} />
    </div>
)

export default CardInfo;