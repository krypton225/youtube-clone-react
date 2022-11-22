const CardDate = ({ publishTime }) => (
    <h6 className="home__videos__card__info__text--date">
        <i className="demo-icon clockicon-"></i> { } published in {publishTime.split("T")[0]}
    </h6>
)

export default CardDate;