import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Content from '../../components/Content';
import { logout } from '../../Helpers/AuthHandler'


export default function Home() {
    const handleLogout = () => {
        logout();
        window.location.href('/')
    }
    return (
        <BrowserRouter>
            <div class="home-wrapper">
                <div id="home" class="content">
                    <header>
                        <div class="logo-wrapper">
                            <h1><a href="">Simodes</a></h1>
                        </div>
                        <div class="navigation-wrapper">
                            <nav>
                                <a >Home</a>
                                <a onClick={() => window.location.href = '/perfil'}>Perfil</a>
                                <a onClick={() => window.location.href = '/cursos'}>Cursos</a>
                                <a onClick={() => window.location.href = '/rankings'}>Ranking</a>
                                <a onClick={handleLogout}>Sair</a>
                            </nav>
                        </div>
                        <div class="profile-wrapper">
                            <div class="profile"></div>
                        </div>
                    </header>

                    <main>
                        <div class="main-wrapper">
                            <div class="main-content">
                                <div class="wel-wrapper">
                                    <div class="wel-content">
                                        <h1>Olá, Matheus</h1>
                                        <div class="wel-text">
                                            <span>Que bom que Você esta aqui.</span>
                                            <span>Continue aprendendo, retorne de onde parou.</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="wel-continue">
                                    <a class="wel-button" href="">
                                        <h2>Programação orientada a objetos</h2>
                                        <div class="button-content">
                                            <span>Continar assistindo</span>
                                            
                                        </div>
                                    </a>
                                </div>

                                <div class="most-courses">
                                    <h1>Destaques</h1>
                                    <div class="carousel-wrapper owl-carousel owl-theme">
                                        <div class="carousel-items">
                                            <div class="course-icon">icon</div>
                                            <h1>icon</h1>
                                            <span>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolor eligendi
                                                deserunt quisquam ducimus.
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}
