import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import useApi from '../../Helpers/SimodisAPI';
import { myToken } from '../../Helpers/AuthHandler';


const Courses = () => {

    const api = useApi();
    const token = myToken();

    const [cursoName, setCursoName] = useState('');
    const [descriptions, setDescriptions] = useState('');
    const [coursers, setCoursers] = useState([]);
    const [disable, setDisable] = useState(false);

    const [mostrarModal, setMostrarModal] = useState(false);
    const handleMostrarModal = () => {
        !mostrarModal ? setMostrarModal(true) : setMostrarModal(false);
    }

    useEffect(()=>{
        const getListCoursers = async () => {
            const listCoursers = await api.getCoursers();
            setCoursers(listCoursers);
        }
        getListCoursers();
    },[]);

    const handleCriarCurso = async (e) => {
        e.preventDefault();
        setDisable(false);

        if(!cursoName && !descriptions){
            alert("Insira os dados do curso!");
            setMostrarModal(false);
        }else{            
            const json = await api.addCursos(cursoName, descriptions);

            if(json.error){
                alert(JSON.stringify(json.error));
            }else{                
                setCursoName('');
                setDescriptions('');
                setMostrarModal(false);
                window.location.reload("/cursos");             
            }
            
        }
        
    }

    return (
        <BrowserRouter>
            <div class="courses">
                <div class="content">
                    <header>
                        <div class="logo-wrapper">
                            <h1><a >Simodes</a></h1>
                        </div>
                        <div class="navigation-wrapper">
                            <nav>
                                <a>Home</a>
                                <a>Perfil</a>
                                <a>Cursos</a>
                                <a>Ranking</a>
                                <a>Configurações</a>
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
                                            <div onClick={() => {handleMostrarModal()}} class="create-course">Create</div>
                                        </div>
                                    </div>

                                    <div class="courses-content">
                                        <section>                                            
                                            {coursers.map((item, index) => {
                                                return(
                                                    <a class="courses">
                                                        <div class="course-icon">icon</div>
                                                        <h1>{item.name}</h1>
                                                        <span>
                                                            {item.description}
                                                        </span>                                                              
                                                        </a>                                                       
                                                );
                                            })}                                                                                                                                                                                
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

                            <form method="POST">
                                <label class="sr-only" for-id="password">nome do curso</label>
                                <input 
                                    type="text" 
                                    id="course-name" 
                                    name="course-name" 
                                    placeholder="nome do curso" 
                                    value={cursoName}
                                    disabled={disable}
                                    onChange={(e) => {
                                        setCursoName(e.target.value)
                                    }}
                                />

                                <label class="sr-only" for-id="password">nome do curso</label>
                                <input 
                                    type="text" 
                                    id="course-description" 
                                    name="course-description" 
                                    placeholder="descrição" 
                                    value={descriptions}
                                    disabled={disable}
                                    onChange={(e) => {
                                        setDescriptions(e.target.value)
                                    }}
                                />

                                <div class="buttons">
                                    <div onClick={() => {setMostrarModal(false)}} class="button grey cancel">Cancelar</div>
                                    <button onClick={handleCriarCurso} class="red">Criar</button>
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