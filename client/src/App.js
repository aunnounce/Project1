import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div className="container mt-3">
        <Switch>
          {Routes.map(route => {
            return <Route
              exact 
              path={route.path} 
              component={route.component} 
              key={route.path}
            />
          })}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
