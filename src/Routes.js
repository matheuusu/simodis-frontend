import React, {  } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './Pages/Signin';
import Home from './Pages/Home';
import Course from './Pages/Courses';

import { isLogged   } from './Helpers/AuthHandler';

let logged = isLogged();

const Private = ({children, ...rest}) => {
    return(
        <Route {...rest}>
            {logged ? children : <Redirect to="/" />}
        </Route>
    );
}

//eslint-disable-next-line import/no-anonymous-default-export
export default () => {    
    return(
        <Switch>
            <Route exact path="/">
                <SignIn />
            </Route>

            <Route exact path="/cursos">
                <Course />
            </Route>

            <Route exact path="/home">
                <Home />
            </Route>

        </Switch>
    );
}