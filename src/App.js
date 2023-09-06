import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import Home from './Home';
import './index.css';
import Guide from "./components/Guide";
import Details from "./components/Details";
import ComingSoon from "./components/Comingsoon";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/guide" element={<Details/>}/>
          <Route exact path="/blog" element={<ComingSoon/>}/>
        </Routes>
    </Router>
  );
}

export default App;
   