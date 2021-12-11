import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { logout } from '../../Helpers/AuthHandler'
import useApi from '../../Helpers/SimodisAPI'
import { getId } from '../../Helpers/AuthHandler'

export default function Question() {
  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  const api = useApi()
  let courseId = getId()

  const [quest, setQuest] = useState([])
  const [estado, setEstado] = useState()

  useEffect(() => {
    const getQuestion = async () => {
      const questions = await api.getQuestions(courseId)
      setQuest(questions)
    }

    console.log(quest)
    getQuestion()
  }, [])

  const [test, setTest] = useState('')

  const handleOnChange = async event => {
    const target = event.target
    let value = target.value
    setTest(value)
    alert(value)
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
                  <a
                    class="isSelected"
                    onClick={() => (window.location.href = '/home')}
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a onClick={() => (window.location.href = '/perfil')}>
                    Perfil
                  </a>
                </li>
                <li>
                  <a onClick={() => (window.location.href = '/cursos')}>
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
              <div class="gradients">
                <div class="card-infor">
                  <h2>Com quantos paus se faz uma canoa?</h2>
                  <form class="answers">
                    {quest.map(item => {
                      return (
                        <div className="quests">
                          {item.answers.map(answer => {
                            return (
                              <div className="quest">
                                {answer.answer_false ? (
                                  <>
                                    <label htmlFor="">
                                      {answer.answer_false}
                                    </label>
                                    <input
                                      name="qualquer"
                                      type="radio"
                                      value={answer.id}
                                      onChange={e => {
                                        handleOnChange(e)
                                      }}
                                    />
                                  </>
                                ) : answer.answer_true ? (
                                  <>
                                    <label htmlFor="">
                                      {answer.answer_true}
                                    </label>
                                    <input
                                      name="qualquer"
                                      type="radio"
                                      value={answer.id}
                                      onChange={e => {
                                        handleOnChange(e)
                                      }}
                                    />
                                  </>
                                ) : null}
                              </div>
                            )
                          })}
                        </div>
                      )
                    })}
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </BrowserRouter>
  )
}
