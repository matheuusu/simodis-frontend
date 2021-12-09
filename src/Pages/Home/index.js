import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, useHistory } from 'react-router-dom'
import { logout } from '../../Helpers/AuthHandler'
import useApi from '../../Helpers/SimodisAPI'
import { myToken } from '../../Helpers/AuthHandler'

export default function Home() {
  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  const [user, setUser] = useState({})

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
      <div class="home-wrapper">
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
                  <a
                    class="isSelected"
                    onClick={() => (window.location.href = '/home')}
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a onClick={() => (window.location.href = '/perfil')}>
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
          <section class="section" id="home">
            <div class="container">
              <div class="text">
                <h2 class="title">Olá, {user.name}</h2>
                <div class="wel-text">
                  <p>É bom ter você de volta.</p>
                  <p>Continue aprendendo, retorne para aula que parou.</p>
                </div>
              </div>

              <div class="continue-wrapper">
                <div class="continue">
                  <h3>Lógica de programação</h3>
                </div>
                <div class="continue">
                  <h3 class="outlined">continuar aula</h3>
                  <i class="icon-play2"></i>
                </div>
              </div>

              <div class="content">
                <div class="gradients">
                  <div class="content-wrapper">
                    <div class="profile-view"></div>
                    <div class="box-content">
                      <h2>Meu perfil</h2>
                      <a
                        onClick={() => (window.location.href = '/perfil')}
                        class="button"
                      >
                        VISUALIZAR PERFIL
                      </a>
                    </div>
                  </div>
                </div>

                <div class="gradients">
                  <div class="content-wrapper">
                    <div class="box-content">
                      <h2>Meus Cursos</h2>
                      <a
                        onClick={() => (window.location.href = '/cursos')}
                        class="button"
                      >
                        VISUALIZAR CURSOS
                      </a>
                    </div>
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
