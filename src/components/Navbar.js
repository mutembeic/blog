import { Link } from "react-router-dom";
import Contact from './Contact';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>Blog Post</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/contact"> Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;

