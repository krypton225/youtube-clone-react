import { useState } from "react";

const GoToTop = () => {
    const [show, setShow] = useState(false);

    const handleTop = () => {
        window.scrollTo(0, 0);
    };

    const handleWhenScroll = () => {
        if (document.body.scrollTo > 10 || document.documentElement.scrollTop > 10) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    window.addEventListener("scroll", handleWhenScroll);

    return (
        <div className={`go-to-top ${show ? "show" : ""}`} id='go-to-top' onClick={handleTop}>
            <i className="demo-icon directionicon-"></i>
        </div>
    )
}

export default GoToTop;