// import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
	  <Router>
		<div className="App">
			<header className="App-header">
				<nav>
					<NavLink to="/gallery" activeClassName="active"> Gallery </NavLink>
					<NavLink to="/battle" activeClassName="active"> Battle </NavLink>
					<Link to="/" > Start </Link>
				</nav>
			</header>
			<main>
				
				 före 
			 <Switch>
				 <Route path="/battle"> Battle  </Route>
				 <Route path="/gallery"> gslly </Route>
				 <Route path="/"> kfk </Route>
			 </Switch>
				 efter
			</main>
    </div>
	</Router>
  );
}

export default App;
