import './App.css';
import { Route , Switch} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './component/Landing/Landing';
import Home from './component/Home/Home';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/home" component={Home}/>
      </Switch>
    </Router>
    
  );
}

export default App;
