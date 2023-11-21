import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <Link to='/'>
        <div>ABOUT</div>
        </Link>
        
        <Link to='/movies'>
        <div>MOVIES</div>
        </Link>
    </div>
  )
}

export default Nav