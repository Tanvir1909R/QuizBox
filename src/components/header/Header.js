import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="headerWrapper">
                <div className="logo">Quiz <span>Box</span></div>
                <nav>
                    <Link to='/'>Topics</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header