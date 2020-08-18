import React from 'react';
import Home from './pages/Home'
import Category from './pages/Category'
import {BrowserRouter as Switch, Route} from 'react-router-dom';
import "./App.css"
import {StarWarContextProvider} from './context/SWContext'

function App() {
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
