import React from 'react'
import { ProfileModal } from './styled'
import useApi from '../../Helpers/SimodisAPI'
import { myToken } from '../../Helpers/AuthHandler'

export default function ModalProfile({ showModal, setShowModal }) {
  const api = useApi()
  const token = myToken()

  const [userName, setUserName] = React.useState()
  const [userEmail, setUserEmail] = React.useState()
  const [userPassword, setUserPassword] = React.useState()

  const handleAltProfile = async () => {
    if (!userName && !userEmail && !userPassword) {
      alert('Preencha o campo que deseja alterar')
      return
    } else {
      const json = await api.altProfile(
        token,
        userName,
        userEmail,
        userPassword
      )

      if (json.error) {
        alert(JSON.stringify(json.error))
        return
      }
    }
  }

  return (
    <ProfileModal>
      {showModal ? (
        <div class="profile-modal">
          <section id="profile-infor">
            <div className="container">
              <div className="gradients">
                <div className="profile-group">
                  <h2>Editar Perfil</h2>
                  <p>Preencha somente os campos que deseja alterar</p>

                  <div className="divider1"></div>
                  <form method="">
                    <input
                      value={userName}
                      type="text"
                      placeholder="Nome"
                      onChange={e => {
                        setUserName(e.target.value)
                      }}
                    />

                    <input
                      value={userEmail}
                      type="text"
                      placeholder="Email"
                      onChange={e => {
                        setUserEmail(e.target.value)
                      }}
                    />

                    <input
                      value={userPassword}
                      type="text"
                      placeholder="Senha"
                      onChange={e => {
                        setUserPassword(e.target.value)
                      }}
                    />

                    <div class="buttons input-group actions">
                      <div
                        onClick={() => {
                          setShowModal(false)
                        }}
                        class="button  cancel red"
                      >
                        Cancelar
                      </div>
                      <button
                        onClick={() => {
                          handleAltProfile()
                          setShowModal(false)
                        }}
                        class="button"
                      >
                        Alterar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </ProfileModal>
  )
}
