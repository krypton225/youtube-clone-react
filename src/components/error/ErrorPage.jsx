import { Link } from "react-router-dom";
import { ErrorTitle } from "../";

const ErrorPage = () => {
    return (
        <div className="error" id="error">
            <div className="container">
                <div className="row">
                    <ErrorTitle errorTitle={`page not found`} />
                    <Link className="error__btn" to="/">home page</Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;