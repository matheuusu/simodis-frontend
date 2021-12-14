import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import useApi from '../../Helpers/SimodisAPI'
import { myToken } from '../../Helpers/AuthHandler'
import { logout, doId, outId } from '../../Helpers/AuthHandler'
import Modal from '../../components/modalCourse'

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
  const [showModal, setShowModal] = React.useState(false)
  const [showQuestion, setShowQuestion] = React.useState(false)
  const [showCreate, setShowCreate] = React.useState(false)
  const [modalCreate, setModalCreate] = React.useState(false)

  const handleId = id => {
    doId(id)
  }

  const handleMostrarModal = () => {
    !mostrarModal ? setMostrarModal(true) : setMostrarModal(false)
  }

  const handleShowQuestion = () => {
    !showQuestion ? setShowQuestion(true) : setShowQuestion(false)
  }

  const handleShowModal = () => {
    !showModal ? setShowModal(true) : setShowModal(false)
  }

  const handleShowCreate = () => {
    !showCreate ? setShowCreate(true) : setShowCreate(false)
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
                          <a
                            onClick={() => {
                              setShowModal(true)
                              handleId(item.id)
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

        {/* Segunda modal */}
        {showModal ? (
          <div className="modal-over">
            <section class="section" id="course-infor">
              <div class="container">
                <div class="gradients">
                  <div class="card-infor">
                    <div class="infor-user">
                      <div class="infor-header">
                        <h2>Informações do Curso</h2>
                        <div className="actions">
                          <div
                            onClick={() => {
                              handleShowModal()
                              outId()
                            }}
                            class="botao red"
                          >
                            Fechar
                          </div>
                        </div>
                      </div>
                      <div class="infors">
                        <div class="infor">
                          <label for="">Curso</label>
                          <h3>Logica de programação</h3>
                        </div>
                        <div class="infor">
                          <label for="">Acessos</label>
                          <h3>0</h3>
                        </div>
                        <div class="infor">
                          <label for="">Ultima alteração</label>
                          <h3>10/12/2021 18:06</h3>
                        </div>
                        <div class="infor">
                          <label for="">Descrição</label>
                          <h3>Curso para iniciantes</h3>
                        </div>
                      </div>

                      <div class="divider1"></div>

                      <div class="infor-header">
                        <h2>Questões cadastradas</h2>
                        <div
                          onClick={() => {
                            setModalCreate(true)
                          }}
                          class="botao"
                        >
                          Nova
                        </div>
                      </div>

                      <div class="quetions">
                        <div class="quetion active">
                          <div class="label">
                            com quantos paus se faz uma canoa
                            <div className="icons">
                              <i className="icon-pencil"></i>
                              <i
                                onClick={handleShowQuestion}
                                className="icon-arrow-down"
                              ></i>
                            </div>
                          </div>
                          {showQuestion ? (
                            <div class="content">
                              <table id="data-table">
                                <thead>
                                  <tr>
                                    <th>Id</th>
                                    <th>Alternativa</th>
                                    <th>Resposta</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>44</td>
                                    <td>falsa</td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>falsa</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>13</td>
                                    <td>falsa</td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>verdadeira</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>falsa</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div class="divider2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : null}
        {/* Modal de criar questões */}
        {modalCreate ? (
          <Modal showCreate={modalCreate} setShowCreate={setModalCreate} />
        ) : null}
      </div>
    </BrowserRouter>
  )
}

export default AdminCourses
