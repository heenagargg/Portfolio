import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";//<FaBars />
import { FaTimes } from "react-icons/fa"; //<FaTimes />
const NavBar = () => {
    const [bars,setBars]=useState(false)
    const Nav=[
        {
            id:1,
            links:"home"
        },
        {
            id:2,
            links:"about"
        },
        {
            id:3,
            links:"technologies"
        },
        {
            id:4,
            links:"projects"
        },
        {
            id:5,
            links:"contact"
        },
    ]
  return (
    <nav className='bg-black flex justify-between items-center py-6 w-full  fixed'>
            <div className='text-white text-3xl mx-8 font-bold font-signature cursor-default'>
                Heena Garg
           </div>
           <div>
           <ul className='flex justify-center items-center uppercase text-gray-500 mx-8 cursor-pointer'>
            {Nav.map(({id,links})=>(
                <li key={id} className='mx-4 text-xl hover:text-gray-400 hover:scale-105 duration-200 '>{links}</li>
            ))}
            <div onClick={()=>setBars(!bars)} className='text-gray-500 mx-4' >

           {!bars?<FaBars size={30}/>:<FaTimes  size={30}/>}
            </div>
           </ul>

           </div>
            
      

    </nav>
  )
}

export default NavBar