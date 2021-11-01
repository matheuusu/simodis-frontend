import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { logout } from '../../Helpers/AuthHandler'

const Rankings = () => {
  const handleLogout = () => {
    logout()
    window.location.href='/'
  }

  return (
    <BrowserRouter>
      <div id="rankings">
        <div class="content">
          <header>
            <div class="logo-wrapper">
              <h1>
                <a>Simodes</a>
              </h1>
            </div>
            <div class="navigation-wrapper">
              <nav>
                <a onClick={() => (window.location.href = '/home')}>Home</a>
                <a onClick={() => (window.location.href = '/perfil')}>Perfil</a>
                <a onClick={() => (window.location.href = '/cursos')}>Cursos</a>
                <a>Ranking</a>
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
                <nav>
                  <ul>
                    <li>Ranking</li>
                    <li>Ranking geral</li>
                  </ul>
                </nav>
                <div class="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Cursos</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1º</td>
                        <td class="flex-aqui">
                          <div class="profile-wrapper">
                            <div class="profile"></div>
                          </div>
                          Matheus Silva
                        </td>
                        <td>Programação Orientada a Objetos</td>
                      </tr>
                      <tr>
                        <td>2º</td>
                        <td class="flex-aqui">
                          <div class="profile-wrapper">
                            <div id="julio" class="profile"></div>
                          </div>
                          Julio
                        </td>
                        <td>Logica de programação</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Rankings
