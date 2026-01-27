// export default function Contact() {
//   return <h1 className="text-3xl p-6">Contact Page</h1>
// }


import { div } from 'framer-motion/client'
import React from 'react'
import Navbar from "../../Components/Navbar"

export default function Contact(){
  return (
    
    <div>
      <Navbar/>
      <h1 className="text-3xl p-6">Contact Page</h1>
    </div>

  )
}
