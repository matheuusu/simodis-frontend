import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import useApi from '../../Helpers/SimodisAPI'
import { myToken } from '../../Helpers/AuthHandler'
import { logout } from '../../Helpers/AuthHandler'

const Courses = () => {
  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  const api = useApi()
  const token = myToken()

  const [cursoName, setCursoName] = useState('')
  const [descriptions, setDescriptions] = useState('')
  const [coursers, setCoursers] = useState([])
  const [disable, setDisable] = useState(false)

  const [mostrarModal, setMostrarModal] = useState(false)
  const handleMostrarModal = () => {
    !mostrarModal ? setMostrarModal(true) : setMostrarModal(false)
  }

  useEffect(() => {
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
        window.location.reload('/cursos')
      }
    }
  }

  return (
    <BrowserRouter>
      <div id="courses">
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
                  <a
                    class="isSelected"
                    onClick={() => (window.location.href = '/cursos')}
                  >
                    Cursos
                  </a>
                </li>
                <li>
                  <a onClick={() => (window.location.href = '/rankings')}>
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
          <section class="section" id="course">
            <div class="container">
              <h1>Cursos disponíveis</h1>
              <div class="courses-wrapp">
                {coursers.map((item, index) => {
                  return (
                    <div href="" class="course">
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>

                      <div class="button">Entrar</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </main>

        {/* <!----- MODAL ------> */}
        {mostrarModal ? (
          <div class="modal-wrapper active">
            <div class="modal">
              <h2>Criar Curso</h2>
              <p>Insira o nome e descrição do curso que deseja criar</p>

              <form method="POST">
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

                <div class="buttons">
                  <div
                    onClick={() => {
                      setMostrarModal(false)
                    }}
                    class="button grey cancel"
                  >
                    Cancelar
                  </div>
                  <button onClick={handleCriarCurso} class="red">
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

export default Courses
