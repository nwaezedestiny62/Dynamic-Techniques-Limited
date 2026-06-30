import React from 'react'
import "./Sidebar.css"
import Logo from '../Logo'
import { FaTimes } from 'react-icons/fa'
import { navigations } from '../../data'
import { Link } from 'react-scroll'

const Sidebar = ({openSidebar, onClose}) => {
  return (
    <div className={`sidebar ${openSidebar ? "visible" : ""}`}>
         <div className="sidebar__wrapper">
            <div className="flex__center top">
                <Logo />
                <button className='flex__center icon' onClick={onClose}>
                    <FaTimes />
                </button>
            </div>
            <div className="middle navlinks">
                {navigations.map((nav,index) => (
                    <Link to={nav.to} smooth={true} className='navitem' key={index} onClick={onClose}>{nav.label}</Link>
                ))}
            </div>
            </div>      
    </div>
  )
}

export default Sidebar
