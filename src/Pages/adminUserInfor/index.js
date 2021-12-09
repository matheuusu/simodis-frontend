import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import useApi from '../../Helpers/SimodisAPI'
import { myToken } from '../../Helpers/AuthHandler'
import { logout } from '../../Helpers/AuthHandler'

export default function AdminUserInfor() {
  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  const api = useApi()

  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    const getListUsers = async () => {
      const listUsers = await api.getListUsers()
      setUsers(listUsers)
    }
    getListUsers()
  }, [])

  return (
    <BrowserRouter>
      <div id="admin-users-infor">
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
                  <a onClick={handleLogout}>Sair</a>
                </li>
              </ul>
            </div>

            <div class="profile"></div>
          </nav>
        </header>

        <main>
          <section class="section" id="user-infor">
            <div class="container">
              <div class="gradients">
                <div class="card-infor">
                  <div class="infor-user">
                    <div class="infor-header">
                      <h2>Informações do usuário</h2>
                      <button class="button">Editar</button>
                    </div>
                    <div class="infors">
                      <div class="infor">
                        <label for="">Nome</label>
                        <h3>Matheus Silva</h3>
                      </div>
                      <div class="infor">
                        <label for="">Matricula</label>
                        <h3>01277424</h3>
                      </div>
                      <div class="infor">
                        <label for="">Email</label>
                        <h3>devtheus0@gmail.com</h3>
                      </div>
                      <div class="infor">
                        <label for="">Senha</label>
                        <h3>adlc8459.</h3>
                      </div>
                    </div>

                    <div class="divider1"></div>

                    <h2>Cursos matriculados</h2>
                    <table id="data-table">
                      <thead>
                        <tr>
                          <th>Curso</th>
                          <th>Nota</th>
                          <th>Ultimo acesso</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Lógica de programação</td>
                          <td>10</td>
                          <td>2021-12-06 01:14:10</td>
                        </tr>
                        <tr>
                          <td>Programação Funcional</td>
                          <td>7</td>
                          <td>2021-11-06 01:35:18</td>
                        </tr>
                      </tbody>
                    </table>

                    <div class="divider2"></div>

                    <div class="mail-invite">
                      <div class="text">
                        <h2>Notificar</h2>
                        <p>
                          Enviar um email com os cursos ainda não matriculados
                        </p>
                      </div>
                      <div class="actions">
                        <button class="button">Enviar</button>
                      </div>
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
