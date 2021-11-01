import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const adminUsers = () => {
  return (
    <BrowserRouter>
      <div id="admin-users">
        <header id="header">
          <h1>Simodes</h1>
          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Usuários</a>
              </li>
              <li>
                <a onClick={() => (window.location.href = '/admin/courses')}>
                  Cursos
                </a>
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
              <h2 class="title">Lista de usuários</h2>
              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nome</th>
                      <th>Matricula</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1º</td>
                      <td class="flex-aqui">Luiz Felipe</td>
                      <td>01277424</td>
                      <td class="relativo ">
                        <div class="buttoon">Ver</div>
                      </td>
                    </tr>
                    <tr>
                      <td>2º</td>
                      <td class="flex-aqui">Geoorge Victor</td>
                      <td>01277567</td>
                      <td class="relativo ">
                        <div class="buttoon">Ver</div>
                      </td>
                    </tr>
                    <tr>
                      <td>3º</td>
                      <td class="flex-aqui">Carla Lopez</td>
                      <td>01278765</td>
                      <td class="relativo ">
                        <div class="buttoon">Ver</div>
                      </td>
                    </tr>
                    <tr>
                      <td>4º</td>
                      <td class="flex-aqui">Daniel de Carvalho</td>
                      <td>01271325</td>
                      <td class="relativo ">
                        <div class="buttoon">Ver</div>
                      </td>
                    </tr>
                    <tr>
                      <td>5º</td>
                      <td class="flex-aqui">Luiz Miguel</td>
                      <td>01276875</td>
                      <td class="relativo ">
                        <div class="buttoon">Ver</div>
                      </td>
                    </tr>
                    <tr>
                      <td>6º</td>
                      <td class="flex-aqui">Lucas Victor</td>
                      <td>01279482</td>
                      <td class="relativo ">
                        <div class="buttoon">Ver</div>
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

export default adminUsers
