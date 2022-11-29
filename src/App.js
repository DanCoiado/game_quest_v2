import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home.js'
import Cadastro from './components/pages/Cadastro.js'
import Jogo from './components/pages/Jogo.js'
import Login from './components/pages/Login.js'

import logoquest from './images/logoQuestBranco.svg';
import image from './images/ImagemFundo.svg'

import Container from './components/layout/container.js'

function App() {
  return ( 
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Cadastro">Cadastro</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Jogo">Jogo</Link>
      </div>
      <Switch>
        <Container>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Cadastro">
            <Cadastro />
          </Route>
          <Route exact path="/Jogo">
            <Jogo />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
