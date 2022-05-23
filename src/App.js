import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import './App.css';

import Gallery from './components/Gallery/Gallery'
import Battle from './components/Battle/Battle'
import Start from "./components/start/Start";



  
function App() {

  const [hamsters, setHamsters] = useState([])
  const [winners, setWinners] = useState([]);
  const [losers, setLosers] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    get()
    getWinners()
    getLosers()
    getMatches()
  }, [])

    async function get() {
      const response = await fetch('/hamsters', { method: 'GET' })
      const data = await response.json()
      setHamsters(data)    
  }
  
    async function getWinners() {
      const response = await fetch('/winners', { method: 'GET' })
      const data = await response.json()
      setWinners(data)
      
    }


    async function getLosers() {
      const response = await fetch('/losers', { method: 'GET' })
      const data = await response.json()
      setLosers(data)
    }


    async function getMatches() {
      const response = await fetch('/matches', { method: 'GET' })
      const data = await response.json()
      setMatches(data)
    }




  

  return (

    
    <Router>
      <div className="App">
        <header className="header">

            <div className="heading">
            
           <NavLink to="/"> <p className="heading-text"> HAMSTERWARS </p> </NavLink>
      

                <nav className="navbar">
				{/* <NavLink to="/" activeClassName="active"> Start </NavLink> */}
                  <NavLink to="/gallery" activeClassName="active"> Gallery </NavLink>
                  <NavLink to="/battle" activeClassName="active"> Battle </NavLink>
           
              </nav>
            </div>
  
        </header>

        <main>
    

          <Switch>
              <Route path="/gallery" render={() => <Gallery hamsters={hamsters} />}/>
              <Route path="/battle"> <Battle/> </Route>
              
              <Route path="/"> <Start/> </Route>
              {/* <Route path="/matches" render={() => <Matches matches={matches} hamsters={hamsters} />}/> */}
      
          </Switch>

        </main>

      </div>
    </Router>



  );



 
}

export default App;