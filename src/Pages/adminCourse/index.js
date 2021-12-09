import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import useApi from '../../Helpers/SimodisAPI'
import { myToken } from '../../Helpers/AuthHandler'
import { logout } from '../../Helpers/AuthHandler'

const AdminCourses = () => {
  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  const api = useApi()

  const [cursoName, setCursoName] = React.useState('')
  const [descriptions, setDescriptions] = React.useState('')
  const [coursers, setCoursers] = React.useState([])
  const [disable, setDisable] = React.useState(false)

  const [mostrarModal, setMostrarModal] = React.useState(false)
  const handleMostrarModal = () => {
    !mostrarModal ? setMostrarModal(true) : setMostrarModal(false)
  }

  React.useEffect(() => {
    const getListCoursers = async () => {
      const listCoursers = await api.getCoursers()
      setCoursers(listCoursers)
    }
    getListCoursers()
  }, [])

  const handleCriarCurso = async e => {
    const handleLogout = () => {
      logout()
      window.location.href('/')
    }

    e.preventDefault()
    setDisable(false)

    if (!cursoName && !descriptions) {
      alert('Insira os dados do curso!')
      setMostrarModal(false)
    } else {
      const json = await api.addCursos(cursoName, descriptions)

      if (json.error) {
        alert(JSON.stringify(json.error))
      } else {
        setCursoName('')
        setDescriptions('')
        setMostrarModal(false)
      }
    }
  }

  return (
    <BrowserRouter>
      <div id="admin-courses">
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
                  <a onClick={() => (window.location.href = '/admin/users')}>
                    Users
                  </a>
                </li>
                <li>
                  <a
                    class="isSelected"
                    onClick={() => (window.location.href = '/admin/courses')}
                  >
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
          <section class="section" id="admin-coursers">
            <div class="container">
              <div class="course-create">
                <h1>Lista dos cursos</h1>
                <div
                  onClick={() => {
                    setMostrarModal(true)
                  }}
                  class="button"
                >
                  criar
                </div>
              </div>

              <table id="data-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Infor</th>
                  </tr>
                </thead>

                <tbody>
                  {coursers.map((item, index) => {
                    return (
                      <tr>
                        <td>{item.name}</td>
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

        {/* <!----- MODAL ------> */}
        {mostrarModal ? (
          <div class="modal-overlay active">
            <div class="modal">
              <h2>Criar Curso</h2>
              <p>Insira o nome e descrição do curso que deseja criar</p>

              <form method="">
                <label class="sr-only" for-id="password">
                  nome do curso
                </label>
                <input
                  type="text"
                  id="course-name"
                  name="course-name"
                  placeholder="nome do curso"
                  value={cursoName}
                  disabled={disable}
                  onChange={e => {
                    setCursoName(e.target.value)
                  }}
                />

                <label class="sr-only" for-id="password">
                  nome do curso
                </label>
                <input
                  type="text"
                  id="course-description"
                  name="course-description"
                  placeholder="descrição"
                  value={descriptions}
                  disabled={disable}
                  onChange={e => {
                    setDescriptions(e.target.value)
                  }}
                />

                <div class="buttons input-group actions">
                  <div
                    onClick={() => {
                      setMostrarModal(false)
                    }}
                    class="button  cancel red"
                  >
                    Cancelar
                  </div>
                  <button onClick={handleCriarCurso} class="button">
                    Criar
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </BrowserRouter>
  )
}

export default AdminCourses
