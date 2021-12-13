import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import useApi from '../../Helpers/SimodisAPI'
import { doLogin } from '../../Helpers/AuthHandler'

const Signup = () => {
  const api = useApi()

  const [name, setName] = useState('')
  const [email, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [disable, setDisable] = useState(false)

  const handleCriarUser = async e => {
    e.preventDefault()
    setDisable(false)

    if (!name || !email || !senha) {
      alert('Insira os dados dos campos!')
    } else {
      const json = await api.createUser(name, email, senha, false)

      if (json.error) {
        alert(JSON.stringify(json.error))
        return
      } else {
        window.location.href = '/'
      }

      setName('')
      setUsuario('')
      setSenha('')
      setDisable(false)
    }
  }

  return (
    <BrowserRouter>
      <div class="signin-wrapper">
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
                <h2>Criar uma conta</h2>
                <form action="/session" method="POST">
                  <label htmlFor="login-id" className="sr-only">
                    Insira seu nome
                  </label>
                  <input
                    type="text"
                    id="name-id"
                    name="name"
                    placeholder="Insira seu nome"
                    value={name}
                    disabled={disable}
                    onChange={e => {
                      setName(e.target.value)
                    }}
                  />

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
                      setUsuario(e.target.value)
                    }}
                  />

                  <label htmlFor="login-pass" className="sr-only">
                    Insira sua senha
                  </label>
                  <input
                    type="password"
                    id="login-pass"
                    name="password"
                    placeholder="Insira sua senha"
                    value={senha}
                    disabled={disable}
                    onChange={e => {
                      setSenha(e.target.value)
                    }}
                  />

                  <button onClick={handleCriarUser}>
                    <img src="../images/enter-room.svg" alt="Login" />
                    Criar conta
                  </button>
                </form>
              </section>
            </div>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Signup
