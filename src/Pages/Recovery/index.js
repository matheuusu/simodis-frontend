import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import useApi from '../../Helpers/SimodisAPI'
import { doLogin } from '../../Helpers/AuthHandler'

const Recovery = () => {
  const api = useApi()

  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
  const [disable, setDisable] = useState(false)

  const [mostrarModal, setMostrarModal] = useState(false)
  const handleMostrarModal = () => {
    !mostrarModal ? setMostrarModal(true) : setMostrarModal(false)
  }

  const handleRecover = async e => {
    e.preventDefault()
    setDisable(false)

    if (!email) {
      alert('Insira os dados do curso!')
      setMostrarModal(false)
      return
    } else {
      const json = await api.getPass(email)

      if (json.error) {
        alert(JSON.stringify(json.error))
      } else {
        setEmail('')
        setMostrarModal(true)
      }
    }
  }

  const handleAltPass = async e => {
    e.preventDefault()
    setDisable(true)

    if (!token || !password) {
      alert('Preencha os campos corretamente')
      setMostrarModal(true)
      return
    } else {
      const json = await api.altPassword(token, password)

      if (json.error) {
        alert(JSON.stringify(json.error))
        setDisable(false)
        return
      } else {
        alert(password)
        window.location.href = '/'
      }
    }
  }

  return (
    <BrowserRouter>
      <div id="recovery" class="signin-wrapper">
        <div id="login-scr" class="content">
          <header>
            <p>
              <a
                onClick={() => {
                  window.location.href = '/'
                }}
              >
                Simodes
              </a>
            </p>
          </header>

          <div id="bg">
            <div className="ball top" />
            <div className="ball bottom" />
          </div>

          <main>
            <div class="container">
              <section>
                <h2>Recuperar senha</h2>
                <form action="">
                  <label htmlFor="login-id" className="sr-only">
                    Insira seu email
                  </label>
                  <input
                    type="email"
                    id="login-id"
                    name="email"
                    placeholder="Insira seu email"
                    value={email}
                    disabled={disable}
                    onChange={e => {
                      setEmail(e.target.value)
                    }}
                  />

                  <button class="button" onClick={handleRecover}>
                    <img src="../images/enter-room.svg" alt="Login" />
                    Enviar
                  </button>
                </form>
              </section>
            </div>
          </main>

          {mostrarModal ? (
            <div className="modal-overlay active">
              <div className="modal">
                <h2>Editar Perfil</h2>
                <form action="">
                  <input
                    type="text"
                    className="input-token"
                    id="token"
                    name="token"
                    placeholder="Insira o token"
                    value={token}
                    disabled={disable}
                    onChange={t => {
                      setToken(t.target.value)
                    }}
                  />

                  <input
                    type="password"
                    className="input-pass"
                    id="altpass"
                    name="altpass"
                    placeholder="Insira a nova senha"
                    value={password}
                    disabled={disable}
                    onChange={p => {
                      setPassword(p.target.value)
                    }}
                  />

                  <div class="input-group actions">
                    <a
                      onClick={() => {
                        setMostrarModal(false)
                      }}
                      href="#"
                      class="button cancel red"
                    >
                      Cancelar
                    </a>
                    <button class="button" onClick={handleAltPass}>
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Recovery
