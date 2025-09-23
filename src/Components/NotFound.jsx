import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notFoundContainer">
            <h1>404</h1>
            <h3>Oops! You took a wrong turn 🚧</h3>
            <Link to="/">Go back to Home</Link>
        </div>
    )
}

export default NotFound;