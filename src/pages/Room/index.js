import React from "react";

const Room = () => {
    return (

        <div className="content">
            <div className="sidebar">
                <div className="logo-content">
                    <div className="logo">
                        <i className='bx bx-notepad'></i>
                        <div className="logo-name">Simodis</div>
                    </div>
                    <i className='bx bx-menu' id="btn"></i>
                </div>

                <ul className="nav-list">
                    <li>
                        <a href="#">
                            <i className='bx bx-grid-alt'></i>
                            <span className="links-name">Menu</span>
                        </a>
                        <span className="tooltip">Menu</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-user'></i>
                            <span className="links-name">Perfil</span>
                        </a>
                        <span className="tooltip">Menu</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-book-content'></i>
                            <span className="links-name">Formulário</span>
                        </a>
                        <span className="tooltip">Menu</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-cog'></i>
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
                            <i className='bx bx-log-out' id="log-out"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="home-content">
                <div className="text">Home content</div>
            </div>

            {/* <script>
                let btn = document.querySelector("#btn")
                let sidebar = document.querySelector(".sidebar")
                btn.onclick = function() {
                    sidebar.classList.toggle("active")
                }
            </script> */}
        </div>

    );
}

export default Room;