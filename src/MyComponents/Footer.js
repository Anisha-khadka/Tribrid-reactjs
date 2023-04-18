import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
  return (
    <>
    <footer>
      <div className='col'>
    <div className='col1'>
      <ul>
      <li>About us</li>
      <li>Contact</li>
      <li>FAQ</li>
      <li>Billing</li>
      </ul>
    </div>
    <div className='col2'>
      <h3>Address</h3>
      <li>Kathmandu</li>
      <li>Nagarjun-2</li>
     </div>
     <div className='col3'>
      <h3>Contact</h3>
      <li>9808041602 <FontAwesomeIcon icon={ faPhone } /></li>
      <li>anishakhadka434@gmail.com <FontAwesomeIcon icon={ faEnvelope } /></li>
     </div>
     <div className='col4'>
      <h3>Payment gateway</h3>
      <li>Esewa</li>
      <li>Khalti</li>
      <li>Bank transfer</li>
      <li>Cash on delivery</li>
     </div>
     <div className='col5'>
      <h3>Social media</h3>
      <li>Instagram</li>
      <li>Facebook</li>
      <li>Youtube</li>
     </div>
     </div>
    <div className='col6'>
      <p>2023@copyright:anisha.com</p>
    </div>
    </footer>
    </>
  )
}

