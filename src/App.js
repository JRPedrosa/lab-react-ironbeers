import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import BeerList from './BeerList';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
import Home from './Home';
import BeerDetail from './BeerDetail';

function App() {
  return (
    <div className="App">

        <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={BeerList} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/beers/:id" component={BeerDetail} />
        {/* <Route path="/movies" render={ () => <List anyProp="something" />} />   PASS PROPS to a route */}

        </Switch>
      
    </div>
  );
}

export default App;
