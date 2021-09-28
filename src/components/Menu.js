import React from 'react';

function botao() {
    let btn = document.querySelector("#btn")
    let sidebar = document.querySelector(".sidebar")
    btn.onclick = function () {
        sidebar.classList.toggle("active")
    }
}

export default function Menu() {
    return (
        <div class="content">
            <div class="sidebar">
                <div class="logo-content">
                    <div class="logo">
                        <i class='bx bx-notepad'></i>
                        <div class="logo-name">Simodes</div>
                    </div>
                    <i class='bx bx-menu' id="btn"></i>
                </div>

                <ul class="nav-list">
                    <li>
                        <a href="#">
                            <i class='bx bx-grid-alt'></i>
                            <span class="links-name">Menu</span>
                        </a>
                        <span class="tooltip">Menu</span>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-user'></i>
                            <span class="links-name">Perfil</span>
                        </a>
                        <span class="tooltip">Perfil</span>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-book-content'></i>
                            <span class="links-name">Formulário</span>
                        </a>
                        <span class="tooltip">Formulário</span>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-cog'></i>
                            <span class="links-name">Configurações</span>
                        </a>
                        <span class="tooltip">Configurações</span>
                    </li>
                </ul>

                <div class="profile-content">
                    <div class="profile">
                        <div class="profile-details">
                            <div class="name-job">
                                <div class="name">Matheus silva</div>
                                <div class="job">Developer</div>
                            </div>
                        </div>
                        <a href="/">
                            <i class='bx bx-log-out' id="log-out"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="home-content">
                
            </div>
        </div>
    );
}