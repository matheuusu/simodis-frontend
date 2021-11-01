import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const adminCourses = () => {
  return (
    <BrowserRouter>
      <div id="admin-course">
        <header id="header">
          <h1>Simodes</h1>
          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a onClick={() => window.location.href = '/admin/users'}>Usuários</a>
              </li>
              <li>
                <a href="">Cursos</a>
              </li>
            </ul>
          </nav>

          <div class="profile-wrapper">
            <div class="profile"></div>
          </div>
        </header>

        <main>
          <div class="main-wrapper">
            <div class="main-content">
              <h2 class="title">Cursos</h2>
              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Cursos</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1º</td>
                      <td class="flex-aqui">
                        <div class="profile-wrapper">
                          <div class="profile"></div>
                        </div>
                        Lógica de programação
                      </td>
                      <td class="relativo">
                        <div class="buttoon">Ver</div>
                      </td>
                    </tr>
                    <tr>
                      <td>2º</td>
                      <td class="flex-aqui">
                        <div class="profile-wrapper">
                          <div id="julio" class="profile"></div>
                        </div>
                        Estrutura de dados
                      </td>
                      <td class="relativo">
                        <div class="buttoon">ver</div>
                      </td>
                    </tr>
                    <tr>
                      <td>2º</td>
                      <td class="flex-aqui">
                        <div class="profile-wrapper">
                          <div id="julio" class="profile"></div>
                        </div>
                        Programação orienta a objetos
                      </td>
                      <td class="relativo">
                        <div class="buttoon">ver</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default adminCourses;
