import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Home } from "./components/Home";

// import ListaUsuariosView from "./views/ListaUsuariosView";
import InicioView from "./views/InicioView";

import CrearUsuarioView from "./views/CrearUsuarioView";
import EditarUsuarioView from "./views/EditarUsuarioView";

import { AuthProvider } from "./context/AuthContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={InicioView} />
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute
              exact
              path="/crearusuario"
              component={CrearUsuarioView}
            />
            <PrivateRoute
              exact
              path="/editarusuario/:id"
              component={EditarUsuarioView}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
