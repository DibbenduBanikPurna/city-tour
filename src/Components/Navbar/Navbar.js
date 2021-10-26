import React from 'react';
import Logo from '../../Images/logo.png'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand m-3" href="/"><img src={Logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <a style={{ fontSize: '30px' }} className="nav-link m-4" href="/">Home </a>
                    </li>
                    <li className="nav-item">
                        <a style={{ fontSize: '30px' }} className="nav-link m-4" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a style={{ fontSize: '30px' }} className="nav-link m-4" href="/">Tours</a>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;