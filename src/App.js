import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import Home from './Home';
import './index.css';
import Guide from "./components/Guide";


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Guide/>}/>
        </Routes>
    </Router>
  );
}

export default App;
   