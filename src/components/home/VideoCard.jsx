const VideoCard = ({ videoId, channelId, channelTitle, publishTime, title, medium }) => {
    return (
        <a className="home__videos__card" href={`https://www.youtube.com/watch?v=${videoId}`}>
            <div className="home__videos__card__thumbnail">
                <img src={medium.url} alt="Thumbnail of video" />
            </div>

            <div className="home__videos__card__info">
                <div className="home__videos__card__info__top">
                    <div className="home__videos__card__info__top__extra">
                        <h4 className="home__videos__card__info__top__extra--title">
                            {title.length > 30 ? title.slice(0, 30) : `${title}...`}
                        </h4>
                        <h5 className="home__videos__card__info__top__extra--channel-name">{channelTitle}</h5>
                    </div>
                </div>

                <h6 className="home__videos__card__info__text--date">
                    <i className="demo-icon clockicon-"></i> { } published in {publishTime.split("T")[0]}
                </h6>
            </div>
        </a>
    )
}

export default VideoCard;