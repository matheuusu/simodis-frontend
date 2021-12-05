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
              <div class="profile-wrapper wrapper">
                <i
                  onClick={() => {
                    setMostrarModal(true)
                  }}
                  class="icon-pencil"
                ></i>
                <div class="profile"></div>
                <h2 class="title">{user.name}</h2>
              </div>
              <div class="content-wrapper wrapper">
                <h3 id="enrolment">matrícula</h3>
                <label for="enrolment">01277424</label>
                <div class="grades"></div>
              </div>
            </div>
          </section>
        </main>

        {mostrarModal ? (
          <div className="modal-overlay active">
            <div className="modal">
              <h2>Editar Perfil</h2>
              <form action="">
                <div class="input-group">
                  <label class="sr-only" for="name">
                    Nome
                  </label>
                  <input class="input-name" type="text" id="name" name="name" placeholder="Nome" />
                </div>

                <div class="input-group">
                  <label class="sr-only" for="amount">
                    Valor
                  </label>
                  <small class="help">
                    Escolha uma imagem para o seu perfil
                  </small>
                  <input type="file" id="profile-image" name="profile-image" />
                </div>

                <div class="input-group actions">
                  <a
                    onClick={() => {
                      setMostrarModal(false)
                    }}
                    href="#"
                    class="button cancel red"
                  >
                    Cancelar
                  </a>
                  <button class="button">Salvar</button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </BrowserRouter>
  )
}

export default Profiles
