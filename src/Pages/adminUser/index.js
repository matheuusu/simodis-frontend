import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { logout } from '../../Helpers/AuthHandler'

const adminUsers = () => {
  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  return (
    <BrowserRouter>
      <div id="admin-users">
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
                  <a href="">Home</a>
                </li>
                <li>
                  <a
                    class="isSelected"
                    onClick={() => (window.location.href = '/admin/users')}
                  >
                    Users
                  </a>
                </li>
                <li>
                  <a onClick={() => (window.location.href = '/admin/courses')}>
                    Courses
                  </a>
                </li>
                <li>
                  <a href="">Ranking</a>
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
          <section class="section" id="admin-user">
            <div class="container">
              <h1>Lista de usuários</h1>

              <table id="data-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Matricula</th>
                    <th>Infor</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Matheus Silva</td>
                    <td>01277424</td>
                    <td>
                      <a href="">Consultar</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Yano Victor</td>
                    <td>01277423</td>
                    <td>
                      <a href="">Consultar</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Luiz Felipe</td>
                    <td>01277422</td>
                    <td>
                      <a href="">Consultar</a>
                    </td>
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

export default adminUsers
