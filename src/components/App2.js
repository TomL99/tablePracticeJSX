import React from 'react';
import Home from '../pages/Home'
import Category from '../pages/Category'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "../App.css"
import NavBar from "../components/Navbar"
import {StarWarContextProvider} from '../context/SWContext'

function App() {
  console.log("app Start")
  return (
    <div>
      <StarWarContextProvider>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route path="/category/:name" component={Category}/>
        </Switch>
    </StarWarContextProvider>
    </div>
  )
}

export default App;
