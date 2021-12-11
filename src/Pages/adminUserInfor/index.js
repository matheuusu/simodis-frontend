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
          <form action="">
            <label htmlFor=""></label>
            <input type="radio" />
          </form>
        </main>
      </div>
    </BrowserRouter>
  )
}
