

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
// import Form from './components/home/Form';
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';
import FavNote from './components/notes/FavNote';
import Notedetail from './components/notes/Notedetail';

function App() {
  return (
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/favorites' component={FavNote}/>
        <Route exact path='/note/:id' component={Notedetail}/>
      </Switch>
    </Router>
    
  );
}

export default App;
