import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom';



const Courses = () => {

    const [mostrarModal, setMostrarModal] = useState(false);
    const handleMostrarModal = () => {
        !mostrarModal ? setMostrarModal(true) : setMostrarModal(false);
    }

    return (
        <BrowserRouter>
            <div class="courses">
                <div class="content">
                    <header>
                        <div class="logo-wrapper">
                            <h1><a href="">Simodes</a></h1>
                        </div>
                        <div class="navigation-wrapper">
                            <nav>
                                <a href="">Home</a>
                                <a href="">Perfil</a>
                                <a href="" class="selected">Cursos</a>
                                <a href="">Ranking</a>
                                <a href="">Configurações</a>
                            </nav>
                        </div>
                        <div class="profile-wrapper">
                            <div class="profile"></div>
                        </div>
                    </header>

                    <main>
                        <div class="main-wrapper">
                            <div class="main-content">
                                <div class="course-wrapper">
                                    <div class="course-title">
                                        <h1>Cursos disponíveis</h1>
                                        <div class="course-action">
                                            <div href="" onClick={() => {handleMostrarModal()}} class="create-course">Create</div>
                                        </div>
                                    </div>

                                    <div class="courses-content">
                                        <section>
                                            <a class="courses" href="">
                                                <div class="course-icon">icon</div>
                                                <h1>title</h1>
                                                <span>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolor eligendi
                                                    deserunt quisquam ducimus.
                                                </span>
                                            </a>
                                            <a class="courses" href="">
                                                <div class="course-icon">icon</div>
                                                <h1>title</h1>
                                                <span>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolor eligendi
                                                    deserunt quisquam ducimus.
                                                </span>
                                            </a>
                                            <a class="courses" href="">
                                                <div class="course-icon">icon</div>
                                                <h1>title</h1>
                                                <span>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolor eligendi
                                                    deserunt quisquam ducimus.
                                                </span>
                                            </a>
                                            <a class="courses" href="">
                                                <div class="course-icon">icon</div>
                                                <h1>title</h1>
                                                <span>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolor eligendi
                                                    deserunt quisquam ducimus.
                                                </span>
                                            </a>
                                            
                                        </section>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </main>
                </div>

                {/* <!----- MODAL ------> */}
                {mostrarModal ?
                    <div class="modal-wrapper active">
                        <div class="modal">
                            <h2>Criar Curso</h2>
                            <p>Insira o nome e descrição do curso que deseja criar</p>

                            <form action="#" method="POST">
                                <label class="sr-only" for-id="password">nome do curso</label>
                                <input type="text" id="course-name" name="course-name" placeholder="nome do curso" />

                                <label class="sr-only" for-id="password">nome do curso</label>
                                <input type="text" id="course-description" name="course-description" placeholder="descrição" />

                                <div class="buttons">
                                    <div onClick={() => {setMostrarModal(false)}} class="button grey cancel">Cancelar</div>
                                    <button class="red">Criar</button>
                                </div>
                            </form>

                        </div>
                    </div>
                    :
                    null
                }

            </div>
        </BrowserRouter>
    )

}

export default Courses