const CardExtraInfo = ({ title, channelTitle }) => (
    <div className="home__videos__card__info__top">
        <div className="home__videos__card__info__top__extra">
            <h4 className="home__videos__card__info__top__extra--title">
                {title.length > 30 ? title.slice(0, 30) : `${title}...`}
            </h4>
            <h5 className="home__videos__card__info__top__extra--channel-name">{channelTitle}</h5>
        </div>
    </div>
)

export default CardExtraInfo;