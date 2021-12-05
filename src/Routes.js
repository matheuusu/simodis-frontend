import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import SignIn from './Pages/Signin'
import SignUp from './Pages/Signup'
import Home from './Pages/Home'
import Course from './Pages/Course'
import Profile from './Pages/Profile'
import Ranking from './Pages/Ranking'
import AdminCourse from './Pages/admin-course'
import AdminUser from './Pages/admin-user'
import Recovery from './Pages/Recovery'

import { isLogged } from './Helpers/AuthHandler'

let logged = isLogged()

const Private = ({ children, ...rest }) => {
  return <Route {...rest}>{logged ? children : <Redirect to="/" />}</Route>
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

      <Private exact path="/admin/courses">
        <AdminCourse />
      </Private>

      <Private exact path="/admin/users">
        <AdminUser />
      </Private>

      <Private exact path="/home">
        <Home />
      </Private>

      <Private exact path="/cursos">
        <Course />
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
