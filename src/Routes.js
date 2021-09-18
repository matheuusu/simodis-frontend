import React from "react";
import { Switch, Route } from 'react-router-dom';
import SignIn from './Pages/Signin';
import RecoveryPass from './Pages/RecoveryPass';
import Room from './Pages/Room';


export default () => {    
    return(
        <Switch>
            <Route exact path="/">
                <SignIn />
            </Route>,
            <Route exact path="/recovery-pass">
                <RecoveryPass />
            </Route>,
            <Route exact path="/room">
                <Room />
            </Route>
            
        </Switch>
    );
}