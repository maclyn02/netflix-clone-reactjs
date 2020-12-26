import React, { useEffect, useState } from 'react'
import './Nav.css'
import MenuIcon from '@material-ui/icons/Menu';

function Nav() {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? handleShow(true) : handleShow(false)
        }) 
        return () => {
            window.removeEventListener('scroll')
        } 
    }, [])

    return (
        <div className={`Nav ${show && 'nav-black'}`}>
            <div className="nav-logo">NETFLIX</div>    
            <div className="nav-menu">
                <MenuIcon />
            </div>
        </div>
    )
}

export default Nav
