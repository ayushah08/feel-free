import React from 'react'
import { Camera } from 'lucide-react'
import { Bot } from 'lucide-react'

const Navbar = () => {
  return (
    <div className=' flex items-center justify-between '>
      <div>
        FeelFree.Ai
      </div>
      <div>
        <button>Home</button>
        <button>Ai Chat</button>
        <button>Calm Zone</button>
        <button>Feel Wall</button>
        <button>Activity</button>
        <button>Achievments</button>
      </div>
      <div>
        <div>Streaks</div>
      </div>
    </div>
  )
}

export default Navbar
