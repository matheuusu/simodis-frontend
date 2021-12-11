import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { logout } from '../../Helpers/AuthHandler'
import useApi from '../../Helpers/SimodisAPI'
import { myToken } from '../../Helpers/AuthHandler'

const Profiles = () => {
  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  const [user, setUser] = useState({})
  const [cursos, setCursos] = useState([])

  const [mostrarModal, setMostrarModal] = useState(false)
  const handleMostrarModal = () => {
    !mostrarModal ? setMostrarModal(true) : setMostrarModal(false)
  }

  const api = useApi()
  const token = myToken()

  useEffect(() => {
    const getUserInfo = async token => {
      const userInfo = await api.getUser(token)
      setUser(userInfo)
    }
    getUserInfo(token)
  }, [])

  useEffect(() => {
    const getMyCourse = async token => {
      const json = await api.getMyCoursers(token)
      setCursos(json)
    }
    getMyCourse(token)
  }, [])

  return (
    <BrowserRouter>
      <div id="profiles">
        <header id="header">
          <nav class="container">
            <h1>
              <a class="logo" href="">
                Simodes
              </a>
            </h1>
            <div class="menu">
              <ul>
                <li>
                  <a onClick={() => (window.location.href = '/home')}>Inicio</a>
                </li>
                <li>
                  <a
                    class="isSelected"
                    onClick={() => (window.location.href = '/perfil')}
                  >
                    Perfil
                  </a>
                </li>
                <li>
                  <a onClick={() => (window.location.href = '/cursos')}>
                    Cursos
                  </a>
                </li>
                <li>
                  <a onClick={() => (window.location.href = '/rankings')}>
                    Ranking
                  </a>
                </li>
                <li>
                  <a onClick={handleLogout}>Sair</a>
                </li>
              </ul>
            </div>

            <div class="profile"></div>
          </nav>
        </header>

        <main>
          <section class="section" id="profile">
            <div class="container">
              <div class="gradients">
                <div class="card-infor">
                  <div class="infor-user">
                    <div class="infor-header">
                      <h2>Informações do usuário</h2>
                      <div className="actions">
                        <button
                          class="button"
                          onClick={() => {
                            alert(cursos)
                            console.log(cursos)
                          }}
                        >
                          Editar
                        </button>
                      </div>
                    </div>
                    <div class="infors">
                      <div class="infor">
                        <label for="">Nome</label>
                        <h3>{user.name}</h3>
                      </div>
                      <div class="infor">
                        <label for="">Matricula</label>
                        <h3>{user.enrollment}</h3>
                      </div>
                      <div class="infor">
                        <label for="">Ultimo acesso</label>
                        <h3>2021-11-06 01:35:18</h3>
                      </div>
                    </div>

                    <div class="divider1"></div>

                    <h2>Cursos matriculados</h2>
                    <table id="data-table">
                      <thead>
                        <tr>
                          <th>Curso</th>
                          <th>Nota</th>
                        </tr>
                      </thead>

                      <tbody>
                        {cursos.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{item.course}</td>
                              <td>{item.grades}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>

                    <div class="divider2"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default Profiles
