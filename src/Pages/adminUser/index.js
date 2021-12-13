import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import useApi from '../../Helpers/SimodisAPI'
import { myToken } from '../../Helpers/AuthHandler'
import { logout } from '../../Helpers/AuthHandler'

const AdminUsers = () => {
  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  const api = useApi()
  const token = myToken()

  const [user, setUser] = React.useState()
  const [modal, setModal] = React.useState(false)
  const [users, setUsers] = React.useState([])

  const [cursos, setCursos] = React.useState([])

  React.useEffect(() => {
    const getListUsers = async () => {
      const listUsers = await api.getListUsers()
      setUsers(listUsers)
    }
    getListUsers()
  }, [])

  React.useEffect(() => {
    const getMyCourse = async token => {
      const json = await api.getMyCoursers(token)
      setCursos(json)
    }
    getMyCourse(token)
  }, [])

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
                  {users.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.enrollment}</td>
                        <td>
                          <a
                            onClick={() => {
                              setModal(true)
                              setUser(item)
                            }}
                          >
                            Consultar
                          </a>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </main>

        {/* MODAL */}
        {modal ? (
          <div className="modal-overlay">
            <section class="section" id="user-infor">
              <div class="container">
                <div class="gradients">
                  <div class="card-infor">
                    <div class="infor-user">
                      <div class="infor-header">
                        <h2>Informações do usuário</h2>
                        <div className="actions">
                          <button
                            className="button red"
                            onClick={() => {
                              setModal(false)
                            }}
                          >
                            Fechar
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
                          <label for="">Email</label>
                          <h3>{user.email}</h3>
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
                              <tr>
                                <td>{item.course}</td>
                                <td>{item.grades}</td>
                              </tr>
                            )
                          })}
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
          </div>
        ) : null}
      </div>
    </BrowserRouter>
  )
}

export default AdminUsers
