import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'

import Home from './Pages/Home'
import AiChat from './Pages/AiChat'
import CalmZone from './Pages/Calm'
import FeelWall from './Pages/FeelWall'
import Activity from './Pages/Activity'
import Achievments from './Pages/Achievements'

const App = () => {
  return (
    <div>
     <Navbar />
     <div>
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/ai-chat' element={<AiChat />} />
         <Route path='/calm-zone' element={<CalmZone />} />
         <Route path='/feel-wall' element={<FeelWall />} />
         <Route path='/activity' element={<Activity />} />
         <Route path='/achievements' element={<Achievments />} />
       </Routes>
     </div>
    </div>
  )
}

export default App

