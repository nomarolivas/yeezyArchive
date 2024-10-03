import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'



// import { GiHamburgerMenu } from 'react-icons/gi'
// import { AnimatePresence, motion } from 'framer-motion'

// import { AiOutlineRollback } from 'react-icons/ai'
// import { BiHomeSmile, BiUser } from 'react-icons/bi'
// import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
// import { FiSettings, FiShoppingCart } from 'react-icons/fi'


export const Sidebar = () => {


  const[open, setOpen] = useState(false)
  const ref = useRef(null)
  useClickAway(ref, () => setOpen(prev => !prev))
  const toggleSidebar = () => setOpen(prev => !prev)

  return(
    <>

      <button 
        onClick={toggleSidebar}
        className='p-3 border-2 border-zinc-800 rounded-xl'
        aria-label='toggle sidebar'
      >



      </button>
    
    
    
    
    </>




  )
}