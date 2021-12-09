import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import useApi from '../../Helpers/SimodisAPI'
import { myToken, doId } from '../../Helpers/AuthHandler'
import { logout } from '../../Helpers/AuthHandler'

const Courses = props => {
  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  const handleId = id => {
    doId(id)
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
                    <div href="" class="course" key={index}>
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>

                      <a
                        class="button"
                        onClick={() => {
                          handleId();
                          window.location.href = '/question'
                        }}
                      >
                        Entrar
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </main>

        {/* <!----- MODAL ------> */}
        {/* <div className="modal-overlay">
          <section class="section" id="question">
            <div class="container">
              <div class="gradients">
                <div class="card-infor">
                  <h2>Com quantos paus se faz uma canoa?</h2>
                  <div class="answers">
                    <input type="radio" name="answer" id="answer1" />
                    <label for="answer1">resposta</label>

                    <input type="radio" name="answer" id="answer2" />
                    <label for="answer2">resposta</label>

                    <input type="radio" name="answer" id="answer3" />
                    <label for="answer3">resposta</label>

                    <input type="radio" name="answer" id="answer4" />
                    <label for="answer4">resposta</label>

                    <input type="radio" name="answer" id="answer5" />
                    <label for="answer5">resposta</label>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div> */}
      </div>
    </BrowserRouter>
  )
}

export default Courses
