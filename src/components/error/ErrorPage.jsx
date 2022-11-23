import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (

        <div className="error" id="error">
            <div className="container">
                <div className="row">
                    <h4 className="error__title">page not found</h4>
                    <Link className="error__btn" to="/">home page</Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;