import React, { useEffect, useState } from 'react'
import { TriggerBtn } from './TriggerBtn'
import Modal from './Modal/Modal';
import AiGenContaner from './AiGenerator/AiGenContaner';



const Layout = ({anchor}) => {
  const [openMoadal, setopenMoadal] = useState(false);


 
  return (
    
  
    <div>
  
      <TriggerBtn action ={setopenMoadal}/>
      <Modal open = {openMoadal} onClose ={()=>setopenMoadal(false)}><AiGenContaner  anchor={anchor} closeFunction={()=>setopenMoadal(false)} /></Modal>
      
    </div>

  )
}

export default Layout
