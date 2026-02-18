import React from 'react'
import { NavLink } from 'react-router-dom';
import { BotMessageSquare , House , Award , Activity , MessageSquare , Sprout ,HeartHandshake, Bold } from 'lucide-react';


const Navbar = () => {
  return (
    <div className=' w-100% flex items-center justify-between m-1 rounded-2xl bg-white shadow-[0_0_15px_lightgray]'>
      <div className='text-1xl font-bold flex items-center gap-1 pl-2'>
         <span className='h-10 w-10 rounded-2xl bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#ec4899] 
          flex items-center justify-center text-white'><HeartHandshake size={30} strokeWidth={2} /></span>
        <span className=''>FeelFree.<span className='bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#ec4899]'>Ai</span></span>
      </div>
     
      <div className=' flex item-center gap-5 shadow-[inset_0_4px_10px_rgba(0,0,0,0.15)] text-white rounded-3xl p-1 m-1'>
        <NavLink to='/' className={({ isActive }) => `nav-btn flex items-center gap-1 hover:white hover:bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#ec4899]  p-1.5 rounded-3xl transition ${isActive ? 'bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#ec4899] ' : 'text-black'}`}>
          <span><House strokeWidth={2} size={20}/></span>
          <span>Home</span>
        </NavLink>

        <NavLink to='/ai-chat'  className={({ isActive }) => `nav-btn flex items-center gap-1 hover:text-white hover:bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#ec4899]  p-1.5 rounded-3xl transition ${isActive ? 'bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#ec4899]  ' : 'text-black'}`}>
          <span><BotMessageSquare strokeWidth={2} size={20}/></span>
          <span>Ai Chat</span>
        </NavLink>

        <NavLink to='/calm-zone' className={({ isActive }) => `nav-btn flex items-center gap-1 hover:text-white hover:bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#ec4899]  p-1.5 rounded-3xl transition ${isActive ? 'bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#ec4899] ' : 'text-black' }`}>
          <span><Sprout strokeWidth={2} size={20}/></span>
          <span>Calm Zone</span>
        </NavLink>

        <NavLink to='/feel-wall' className={({ isActive }) => `nav-btn flex items-center gap-1 hover:text-white hover:bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#ec4899]  p-1.5 rounded-3xl transition ${isActive ? 'bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#ec4899] ' : 'text-black'}`}>
          <span><MessageSquare strokeWidth={2} size={20}/></span>
          <span>Feel Wall</span>
        </NavLink>

        <NavLink to='/activity' className={({ isActive }) => `nav-btn flex items-center gap-1 hover:text-white hover:bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#ec4899]  p-1.5 rounded-3xl transition ${isActive ? 'bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#ec4899] ' : 'text-black'}`}>
           <span><Activity strokeWidth={2} size={20}/></span>
          <span>Activity</span>
        </NavLink>

        <NavLink to='/achievements' className={({ isActive }) => `nav-btn flex items-center gap-1 hover:text-white hover:bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#ec4899]  p-1.5 rounded-3xl transition ${isActive ? 'bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#ec4899] ' : 'text-black'}`}>
          <span><Award strokeWidth={2} size={20}/></span>
          <span>Achievments</span>
        </NavLink>
      </div>

      <div className='flex items-center'>
        <img className='h-10 w-10' src='https://imgs.search.brave.com/1uN0MytlD6_RQj-iG-Dl2exTy0qsVf7Q5Pg3DWMEN24/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzEv/OTI5LzA0OS9zbWFs/bC9zdHlsaXplZC1v/cmFuZ2UtYW5kLXll/bGxvdy1mbGFtZS1n/cmFwaGljLWVsZW1l/bnQtb24tdHJhbnNw/YXJlbnQtYmFja2dy/b3VuZC1wbmcucG5n'></img>
        <span className='bg-clip-text font-bold text-transparent text-2xl bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#ec4899]'>3</span>
      </div>
    </div>
  )
}

export default Navbar
