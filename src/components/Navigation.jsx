import React from 'react'
import "./Navigation.css"




function Navigation() {
  return (
    <nav>
        <div>
            <img className='logo-img' src="/logo.png" alt="Logo" />
        </div>
        <ul className="links">
            <li>Menu</li>
            <li>About</li>
            <li>Location</li>
            <li>Contact</li>
        </ul>

        <div className="login-btn">
            <button>Login</button>
        </div>


        
    </nav>
  )
}

export default Navigation
