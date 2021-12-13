import React from 'react'
import { Link } from 'react-router-dom'
import { ModalCourse } from './styled'
import useApi from '../../Helpers/SimodisAPI'
import { getId } from '../../Helpers/AuthHandler'

export default function Modal({ showCreate, setShowCreate }) {
  const api = useApi()
  let courseId = getId()

  const [disable, setDisable] = React.useState(false)
  const [answerOne, setAnswerOne] = React.useState()
  const [answerTwo, setAnswerTwo] = React.useState()
  const [answerThree, setAnswerThree] = React.useState()
  const [answerFour, setAnswerFour] = React.useState()
  const [title, setTitle] = React.useState()
  const [answerTrue, setAnswerTrue] = React.useState()

  const handleCreateQuestion = async e => {
    e.preventDefault()

    const json = await api.createQuestion(
      title,
      answerTrue,
      courseId,
      answerOne,
      answerTwo,
      answerThree,
      answerFour
    )

    console.log(json)

    if (json.error) {
      alert(JSON.stringify(json.error))
      return
    }

    if (json == 'Igual') {
      alert('sua questão já existe no banco, tente outra')
      return
    }

    if (json == 'OK') {
      alert('sua pergunta foi cadastrada')
      setShowCreate(false)
      return
    }
  }

  const handleShowCreate = () => {
    setShowCreate(false)
  }

  const handleNovaQuestao = async e => {
    e.preventDefault()

    const json = await api.createQuestion(
      title,
      answerTrue,
      courseId,
      answerOne,
      answerTwo,
      answerThree,
      answerFour
    )

    console.log(json)

    if (json.error) {
      alert(JSON.stringify(json.error))
      return
    }

    if (json == 'Igual') {
      alert('sua questão já existe no banco, tente outra')
      return
    }

    if (json == 'OK') {
      alert('sua pergunta foi cadastrada')
      setTitle('')
      setAnswerTrue('')
      setAnswerOne('')
      setAnswerTwo('')
      setAnswerThree('')
      setAnswerFour('')
      return
    }
  }

  return (
    <ModalCourse>
      {showCreate ? (
        <div className="course-modal">
          <section id="course-infor">
            <div className="container">
              <div className="gradients">
                <div className="course-question">
                  <form action="">
                    <h2>Questão</h2>
                    <div className="input-group">
                      <input
                        value={title}
                        class="campo"
                        type="text"
                        id="question-title"
                        placeholder="Insira a questão"
                        onChange={e => {
                          setTitle(e.target.value)
                        }}
                      />
                    </div>

                    <div className="divider1"></div>

                    <h2>Alternativas</h2>
                    <div className="input-group">
                      <input
                        value={answerTrue}
                        class="campo"
                        type="text"
                        placeholder="Insira a alternativa correta"
                        onChange={e => {
                          setAnswerTrue(e.target.value)
                        }}
                      />
                    </div>

                    <div className="divider2"></div>

                    <div className="input-group">
                      <input
                        value={answerOne}
                        class="campo"
                        type="text"
                        placeholder="Insira a alternativa"
                        onChange={e => {
                          setAnswerOne(e.target.value)
                        }}
                      />

                      <input
                        value={answerTwo}
                        class="campo"
                        type="text"
                        placeholder="Insira a alternativa"
                        onChange={e => {
                          setAnswerTwo(e.target.value)
                        }}
                      />

                      <input
                        value={answerThree}
                        class="campo"
                        type="text"
                        placeholder="Insira a alternativa"
                        onChange={e => {
                          setAnswerThree(e.target.value)
                        }}
                      />

                      <input
                        value={answerFour}
                        class="campo"
                        type="text"
                        placeholder="Insira a alternativa"
                        onChange={e => {
                          setAnswerFour(e.target.value)
                        }}
                      />
                    </div>

                    <div className="button-actions">
                      <div onClick={handleShowCreate} className="button red">
                        Cancelar
                      </div>
                      <button onClick={handleNovaQuestao} className="button">
                        Nova
                      </button>
                      <button onClick={handleCreateQuestion} className="button">
                        Criar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </ModalCourse>
  )
}
