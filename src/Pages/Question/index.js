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

  const [quest, setQuest] = useState({})

  useEffect(() => {
    const getQuestion = async () => {
      const question = await api.getQuestions(courseId)
      setQuest(question)
    }

    console.log(quest)
    getQuestion()
  }, [])

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
                  <div class="answers">
                    <div className="quests">
                      <input type="radio" name="answer" id="answer1" />
                      <label for="answer1">alt</label>

                      <input type="radio" name="answer" id="answer2" />
                      <label for="answer2">alt</label>

                      <input type="radio" name="answer" id="answer3" />
                      <label for="answer3">alt</label>

                      <input type="radio" name="answer" id="answer4" />
                      <label for="answer4">alt</label>

                      <input type="radio" name="answer" id="answer5" />
                      <label for="answer5">alt</label>
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
