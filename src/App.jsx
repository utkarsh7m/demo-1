import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Announcement from './components/Announcement';
import Header from './components/Header';
import React from 'react'
import Home from './components/Home';
// import './components/Announcement.css'

const App = () => {
  return (
    <Router>
      <Announcement/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App