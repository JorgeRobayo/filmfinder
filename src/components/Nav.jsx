import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <Link to='/'>
        <div>MAIN</div>
        </Link>
        
        <Link to='/movies'>
        <div>MOVIES</div>
        </Link>
    </div>
  )
}

export default Nav