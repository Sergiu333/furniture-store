import React from 'react';
import './header.scss';
function Header() {
    return (
        <nav>
            <div className="container mx-auto">
                <ul className="nav-list">
                    <li className="nav-logo">
                        <div className="logo">
                            <p>LOGO</p>
                        </div>
                        <button className="btn" id="nav-toggle">
                            <i className="fa fa-bars"></i>
                        </button>
                    </li>

                    <li className="nav-link">About<i className="fa fa-chevron-up"></i>
                        <ul className="nav-drop">
                            <li>Our Team</li>
                            <li>Our Process</li>
                            <li>History</li>
                        </ul>
                    </li>

                    <li className="nav-link">Work<i className="fa fa-chevron-up"></i>
                        <ul className="nav-drop">
                            <li>Portfolio</li>
                            <li>Showcase</li>
                        </ul>
                    </li>

                    <li className="nav-link">Contact</li>
                    <li className="nav-item">
                        <button className="btn">Sign in</button>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Header;
