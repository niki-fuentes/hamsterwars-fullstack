import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom'
import './App.css';
import Start from "./components/start/Start";

function App() {
  return (
	  <Router>
		<div className="App">
			<header className="App-header">
				<nav>
					<Link to="/" > Start </Link>
					<NavLink to="/battle" activeClassName="active"> Battle </NavLink>
					<NavLink to="/gallery" activeClassName="active"> Gallery </NavLink>
				</nav>
			</header>
			<main>
	
			 <Switch>
				 <Route path="/battle"> Battle  </Route>
				 <Route path="/gallery"> gslly </Route>
				 <Route exact path="/">  <Start/> </Route>
			 </Switch>
				
			</main>
    </div>
	</Router>
  );
}

export default App;
