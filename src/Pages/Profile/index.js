import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const Profiles = () => {
  return (
    <BrowserRouter>
      <div class="profile">
        <div class="content">
          <header>
            <div class="logo-wrapper">
              <h1>
                <a href="">Simodes</a>
              </h1>
            </div>
            <div class="navigation-wrapper">
              <nav>
                <a onClick={() => window.location.href = '/home'}>Home</a>
                <a href="">Perfil</a>
                <a onClick={() => window.location.href = '/cursos'}>
                  Cursos
                </a>
                <a onClick={() => (window.location.href = '/rankings')}>Ranking</a>
                <a href="">Configurações</a>
              </nav>
            </div>
            <div class="profile-wrapper">
              <div class="profile"></div>
            </div>
          </header>

          <main>
            <div class="main-wrapper">
              <div class="profile-wrapper">
                <div class="profile-bar"></div>
                <div class="profile-content">
                  <div class="profile-user">
                    <div class="image-wrapper">
                      <div class="user-image"></div>
                    </div>
                    <h2>Matheus Silva das Mercês</h2>
                    <div class="profile-button">Editar Perfil</div>
                  </div>
                  <div class="user-infor">
                    <div class="field-wrapper">
                      <div class="field">
                        <p class="field-title">Nome</p>
                        <p class="field-content">Matheus Silva das Mercês</p>
                      </div>
                      
                    </div>
                    <div class="field">
                      <p class="field-title">Sobre</p>
                      <p class="field-content field-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Optio possimus suscipit eligendi nihil animi
                        aliquid cum recusandae, facilis dolores error dolore
                        deserunt sint quam at hic molestiae molestias aspernatur
                        saepe!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Profiles
