import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import useApi from '../../Helpers/SimodisAPI'
import { doLogin, doAdmin } from '../../Helpers/AuthHandler'

const Signin = () => {
  const api = useApi()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [disable, setDisable] = useState(false)

  const handleFazerLogin = async e => {
    e.preventDefault()
    setDisable(true)

    if (!email || !senha) {
      alert('Informe suas credenciais!')
      setDisable(false)
      return
    } else {
      
      const json = await api.login(email, senha)

      if (json.error) {
        alert(JSON.stringify(json.error))
        setDisable(false)
        return
      }

      if (json.isAdmin) {
        doLogin(json.token)
        doAdmin(json.isAdmin)
        window.location.href = '/admin/users'
      } else {
        doLogin(json.token)
        window.location.href = '/home'
      }

      setEmail('')
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
              <a href="">Simodes</a>
            </p>
          </header>

          <div id="bg">
            <div className="ball top" />
            <div className="ball bottom" />
          </div>

          <main>
            <div class="container">
              <section>
                <h2>Acessar a conta</h2>
                <form action="/session" method="POST">
                  <label htmlFor="login-id" className="sr-only">
                    Insira sua Matrícula
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

                  <button onClick={handleFazerLogin}>
                    <img src="../images/enter-room.svg" alt="Login" />
                    Login
                  </button>
                </form>
              </section>

              <div className="separator">
                <div />
                <div>ou</div>
                <div />
              </div>

              <section>
                <h2>Ainda não possui acesso a plataforma?</h2>
                <a
                  onClick={() => {
                    window.location.href = '/signup'
                  }}
                  className="button outlined"
                >
                  <img src="/images/users.svg" alt="Recuperar senha" />
                  Criar conta
                </a>

                <a
                  class="button"
                  onClick={() => {
                    window.location.href = '/recovery'
                  }}
                >
                  Recuperar senha
                </a>
              </section>
            </div>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Signin
