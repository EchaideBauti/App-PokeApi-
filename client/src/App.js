import './App.css';
import { Route , Switch} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './component/Landing/Landing';
import Home from './component/Home/Home';
import CreatePoke from './component/CreatePoke/CreatePoke';
import Details from './component/Detaila/Details';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {GetAllType} from './actions/index';



function App() {
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(GetAllType())
},[dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/home" component={Home}/>
        <Route path="/home/create" component={CreatePoke}/>
        <Route path="/home/detail/:id" component={Details}/>
      </Switch>
    </Router>
    
  );
}

export default App;
