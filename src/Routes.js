import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import SignIn from './Pages/Signin'
import SignUp from './Pages/Signup'
import Home from './Pages/Home'
import Course from './Pages/Course'
import Profile from './Pages/Profile'
import Ranking from './Pages/Ranking'
import AdminCourse from './Pages/adminCourse'
import AdminUser from './Pages/adminUser'
import Recovery from './Pages/Recovery'
import Question from './Pages/Question'

import { isLogged, isAdmin } from './Helpers/AuthHandler'

let logged = isLogged()
let admin = isAdmin()

const Private = ({ children, ...rest }) => {
  return <Route {...rest}>{logged ? children : <Redirect to="/" />}</Route>
}

const PrivateAdmin = ({ children, ...rest }) => {
  return (
    <Route {...rest}>{logged && admin ? children : <Redirect to="/" />}</Route>
  )
}

//eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>

      <Route exact path="/signup">
        <SignUp />
      </Route>

      <Route exact path="/recovery">
        <Recovery />
      </Route>

      <PrivateAdmin exact path="/admin/courses">
        <AdminCourse />
      </PrivateAdmin>

      <PrivateAdmin exact path="/admin/users">
        <AdminUser />
      </PrivateAdmin>

      <Private exact path="/home">
        <Home />
      </Private>

      <Private exact path="/cursos">
        <Course />
      </Private>

      <Private exact path="/question">
        <Question />
      </Private>

      <Private exact path="/perfil">
        <Profile />
      </Private>

      <Private exact path="/rankings">
        <Ranking />
      </Private>
    </Switch>
  )
}
