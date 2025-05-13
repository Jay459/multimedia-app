import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__brand">
                <Link to="/">Media Vault</Link>
            </div>
            <div className="navbar__links">
                <Link to="/">Home</Link>
                <Link to="/upload">Upload</Link>
                <Link to="/search">Search</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    );
};

export default Navbar;
