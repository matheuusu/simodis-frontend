import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import useApi from '../../Helpers/SimodisAPI'
import { myToken } from '../../Helpers/AuthHandler'
import { logout } from '../../Helpers/AuthHandler'

const adminCourses = () => {
  const handleLogout = () => {
    logout()
    window.location.href = '/'
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
                  <a href="">Home</a>
                </li>
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
                  <a href="./ranking.html">Ranking</a>
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
              <h1>Lista dos cursos</h1>

              <table id="data-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Infor</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Lógica de programação</td>
                    <td>
                      <a href="">Consultar</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Arquitetura de software</td>
                    <td>
                      <a href="">Consultar</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Programação 1</td>
                    <td>
                      <a href="">Consultar</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default adminCourses
