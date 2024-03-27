import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from './favicon.ico'
import './app.css'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-0 bg-0 py-3 sticky-top">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4 px-2 " href="#Home">  <img src={logo} className='img-logo-set'  alt="" />
                </a>
                <button className="navbar-toggler mx-2 btn btn-outline-info" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon " style={{color:'aqua'}}></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#Home"> <button className='glow-on-hover  btn-outline-info ft-initial'><b>Home</b></button> </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#About"><button className='glow-on-hover  ft-initial'><b>About</b></button></a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="#Whychoose"><button className='glow-on-hover  ft-initial'><b> My Achivement </b></button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Certification"><button className='glow-on-hover  ft-initial'><b> My Achivement </b></button></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#WorkExpresince"><button className='glow-on-hover  ft-initial'><b>My Best Works</b></button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#QalificationWork"><button className='glow-on-hover  ft-initial'><b>Qalification Work</b></button></a>
                        </li>
                                                
                       
                    </ul>
                    <div className="buttons text-center">
                    <li className="nav-item">
                            <a className="nav-link" href="#Contact"><button className='glow-on-hover  ft-initial'><b>Get In Touch</b></button></a>
                        </li>
                       
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar