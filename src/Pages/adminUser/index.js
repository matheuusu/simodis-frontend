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
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.enrollment}</td>
                        <td>
                          <a href="">Consultar</a>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default AdminUsers
