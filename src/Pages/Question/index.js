import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { logout } from '../../Helpers/AuthHandler'
import useApi from '../../Helpers/SimodisAPI'
import { getId, myToken } from '../../Helpers/AuthHandler'

export default function Question() {
  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  const api = useApi()
  let courseId = getId()
  const token = myToken()

  const [quest, setQuest] = useState([])
  const [estado, setEstado] = useState()
  const [outro, setOutro] = useState()

  useEffect(() => {
    const getClasses = async () => {
      await api.createClass(token, courseId)
    }

    getClasses()
  }, [])

  useEffect(() => {
    const getQuestion = async () => {
      const questions = await api.getQuestions(courseId)
      setQuest(questions)
    }

    console.log(quest)
    getQuestion()
  }, [])

  // Enviar respostas
  const handleTasks = async () => {
    const json = await api.resolveTask(test)

    json > 6
      ? alert(`Parabéns! Sua nota ${json} foi muito boa`)
      : alert(`Você obteve ${json} acertos.`)
  }

  const [test, setTest] = useState('')

  const handleOnChange = async event => {
    const target = event.target
    let value = target.value
    setTest(test + ',' + value)
  }

  const handleOutra = async () => {
    alert(test)
  }

  return (
    <BrowserRouter>
      <div id="questions">
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
          <section class="section" id="question">
            <div class="container">
              {quest.map((item, index) => {
                return (
                  <form class="answers">
                    <div key={index} class="gradients">
                      <div class="card-infor">
                        <h2>{item.question}</h2>
                        <div className="quests">
                          {item.answers.map((answer, index) => {
                            return (
                              <div key={index} className="quest">
                                {answer.answer_false ? (
                                  <>
                                    <label htmlFor={answer.id}>
                                      {answer.answer_false}
                                      <input
                                        id={answer.id}
                                        name="qualquer"
                                        type="radio"
                                        value={answer.id}
                                        onChange={e => {
                                          handleOnChange(e)
                                        }}
                                      />
                                    </label>
                                  </>
                                ) : answer.answer_true ? (
                                  <>
                                    <label htmlFor={answer.id}>
                                      {answer.answer_true}
                                      <input
                                        id={answer.id}
                                        name="qualquer"
                                        type="radio"
                                        value={answer.id}
                                        onChange={e => {
                                          handleOnChange(e)
                                        }}
                                      />
                                    </label>
                                  </>
                                ) : null}
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </form>
                )
              })}

              <div className="input-group actions">
                <button className="button" onClick={handleTasks}>
                  Enviar
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </BrowserRouter>
  )
}
