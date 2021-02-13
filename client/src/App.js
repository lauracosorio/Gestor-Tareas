import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";

export const CredentialsContext = React.createContext();

function App() {
  const credentialState = useState({})
  return (
    <CredentialsContext.Provider value ={credentialState}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/registrarse" component={SignUp} />
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Home}/>
      </Switch>
    </BrowserRouter>
    </CredentialsContext.Provider>
  );
}

export default App;
