
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="">User Selection</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to = "/authors" className="nav-link active" aria-current="page" >Author</Link>
                        </li>
                        <li className="nav-item">
                            <Link to = "/favorite-author" className="nav-link" >Favourite Authors</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Header;

