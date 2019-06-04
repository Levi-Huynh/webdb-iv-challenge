import React, {Component} from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Nav from './Nav';
import DishList from './dishes/DishList';
import RecipesList from './recipes/RecipesList';

function App() {
  return (
    <div className="mainbox">
      <Route path='/' component={Nav}/>
  <Route exact/*  */ path= '/' component={DishList}/>
  <Route exact path= '/projectdetails/:id' component={RecipesList}/>
    </div>
  );
}

export default App;

