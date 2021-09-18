import React from "react";
import { Switch, Route } from 'react-router-dom';
import SignIn from './Pages/Signin';


export default () => {    
    return(
        <Switch>
            <Route exact path="/">
                <SignIn />
            </Route>
            
        </Switch>
    );
}