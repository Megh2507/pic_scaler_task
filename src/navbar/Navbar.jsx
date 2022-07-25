import React,{useState} from 'react'
import "./navbar.css"
import {RiLogoutCircleFill} from "react-icons/ri"
import {RiLoginCircleLine} from "react-icons/ri"
import {FaImages} from "react-icons/fa"
import {CgProfile} from "react-icons/cg"
import {AiOutlineCaretDown} from "react-icons/ai"


const Navbar = () => {

  return (
    <div className='nav-bod'>
        <div className="nav-left">
            <FaImages color='#34b7fd' size={25}/>
            <h5>UpsacalePics</h5>
            <button className="nav-l-rnd">
               Pricing
            </button>
            <button className="nav-l-rnd">
               Resources
            </button>
            <button className="nav-l-rnd">
               Help
            </button>
        </div>
        <div className="nav-right">
           <div className="n-r-shr"><RiLoginCircleLine/><b>Sign In</b></div>
           <div className="n-r-flw"><RiLogoutCircleFill color='#1a73e8'/>Sign Out</div>
          
          
        </div>
    </div>
  )
}

export default Navbar