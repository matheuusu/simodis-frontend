import React from 'react';

export default function Menu() {
    return (
        <div className="sidebar">
            <div className="logo-content">
                <div className="logo">
                    <i className="bx bx-notepad" />
                    <div className="logo-name">Simodis</div>
                </div>
                <i className="bx bx-menu" id="btn" />
            </div>
            <ul className="nav-list">
                <li>
                    <a href="#">
                        <i className="bx bx-grid-alt" />
                        <span className="links-name">Menu</span>
                    </a>
                    <span className="tooltip">Menu</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-user" />
                        <span className="links-name">Perfil</span>
                    </a>
                    <span className="tooltip">Menu</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-book-content" />
                        <span className="links-name">Formulário</span>
                    </a>
                    <span className="tooltip">Menu</span>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-cog" />
                        <span className="links-name">Config</span>
                    </a>
                    <span className="tooltip">Menu</span>
                </li>
            </ul>
            <div className="profile-content">
                <div className="profile">
                    <div className="profile-details">
                        <div className="name-job">
                            <div className="name">Matheus silva</div>
                            <div className="job">Developer</div>
                        </div>
                    </div>
                    <a href="/">
                        <i className="bx bx-log-out" id="log-out" />
                    </a>
                </div>
            </div>
            <div className="home-content">
                <div className="text">Home content</div>
            </div>
        </div>
    );
}