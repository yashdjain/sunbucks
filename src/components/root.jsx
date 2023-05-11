import '../styles/root.scss'
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';
import NavBar from './navBar';

function Root() {
  return (
    <div className="App">
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
    </div>
  );
}

export default Root;
