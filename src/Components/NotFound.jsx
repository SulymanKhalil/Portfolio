import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notFoundContainer">
            <h1>404 — Page Not Found</h1>
            <p>Don’t worry, it happens. Let’s get you back on track</p>
            <a href="">Go back to Home</a>
        </div>
    )
}

export default NotFound;