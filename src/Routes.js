import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import SignIn from './Pages/Signin'
import Home from './Pages/Home'
import Course from './Pages/Course'
import Profile from './Pages/Profile'

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

      <Private exact path="/home">
        <Home />
      </Private>

      <Private exact path="/cursos">
        <Course />
      </Private>

      <Private exact path="/perfil">
        <Profile />
      </Private>
    </Switch>
  )
}
