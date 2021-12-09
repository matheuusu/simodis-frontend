import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { logout } from '../../Helpers/AuthHandler'
import useApi from '../../Helpers/SimodisAPI'
import { myToken } from '../../Helpers/AuthHandler'

const Rankings = () => {
  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  const [courseGrade, setCourseGrade] = useState({})

  const api = useApi()
  const token = myToken()

  return (
    <BrowserRouter>
      <div id="rankings">
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
                  <a
                    class="isSelected"
                    onClick={() => (window.location.href = '/rankings')}
                  >
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
          <section class="section" id="ranking">
            <div class="container">
              <h1>Ranking</h1>

              <table id="data-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Pontuação</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1º</td>
                    <td>Matheus Silva</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>2º</td>
                    <td>Yano Victor</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>3º</td>
                    <td>Luiz Felipe</td>
                    <td>14</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default Rankings
