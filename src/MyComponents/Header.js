import React from 'react'
import logo from './../image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
  return (
    <>
    <div className='head'>
    <label>
    <img src={logo}/>
   
    <li><FontAwesomeIcon icon={ faBars } /></li>
    <input type="text" placeholder='Category' ></input>
   
    <input type="search" placeholder='Search for items' /> 
    <div className='fonts'>
    <li><FontAwesomeIcon icon={faEnvelope} /></li>
    <li><FontAwesomeIcon icon={faFacebook} /></li>
    <li><FontAwesomeIcon icon={faInstagramSquare} /></li>
    </div>
  <div className='fonts1'>
 <li><FontAwesomeIcon icon={faCartPlus} />Cart</li>

  </div>
    <button>Login</button>
    </label>
    </div>
  
</>
  )
}


