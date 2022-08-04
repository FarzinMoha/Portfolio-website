import React from 'react'
import './Home.css'
import { BiChevronDown } from "react-icons/bi";

function Home(props) {
  let scroll = parseInt(props.scroll)
  
  return (
    <div id='home' className='main'>
      <h1>Hello,</h1>
      <h2>I'm</h2>
      <h1 id='name'>VANILIA</h1>
      <p>FRONT-END DEVELOPER</p>
      <div className='scroll'>
        <div className='scroll-container'>
          <BiChevronDown className='down-icon'/>
        </div>
        <p>SCROLL</p>
      </div>
    </div>
  )
}

export default Home