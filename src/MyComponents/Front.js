import React from 'react'
import CateData from './CateData';
import image from './../image/Anu.jpg';
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>

export default function Sidebar() {
  return (
<>
   
   <div className='navbar '>
   </div>
   
  <div className='navbar2 '> 
        <nav >
        <li>About us</li>
        <li>Under 200</li>
        <li>Mens</li>
        <li>Womens</li>
        <li>Toddlers</li>
        </nav>
      <div className='navbar3'>
        <li>Choose your fashion</li>
      </div>
    </div>
    <hr/>
<h1>Shop at reasonable price</h1>
    <hr/>
     
   <div className='clothes'>
{CateData.map((a)=> (
 <div className='clothes1'> 
 <img src={a.img}/>
 <h3>{a.title}</h3>
 <h5>{a.category}</h5>
 <p>{a.price}</p>
 <button>SHOP NOW</button>
  </div>
))}
</div>
<div className='signup'>
  <div className='signuptext'>
     <h1>Get 20% off for your first order</h1>
     <h3>Signup for promotions, discounts on your purchase and get updates straight to your inbox on every trendy arrivals.Get gifts,take part in giveaways and win expensive prizes.</h3>
  </div>
  
  <div className='signupform'>
  <legend>Updates here</legend>
  Name <input type='text' /> <br/>
  Gender:<input type='radio' name='gender' value='Female'/>Femal
  <input type='radio' name='gender' value='Male'/>Male<br/>
  Province <input type='text' name='co' list='abc'/>
  <datalist id="abc">
    <option>Bagmati</option>
    <option>Madesh</option>
    <option>Bagmati</option>
    <option>Gandaki</option>
    <option>Lumbini</option>
    <option>Karnali</option>
    <option>Sudur Paschim</option>
    </datalist><br/>
    Email <input type='email' /><br/>
    Password<input type='password' /><br/>
  
   <button>Signup</button>
</div>
</div>
<div className='test'>
  <div className='test1'>
    <img src={image}/>
    <p> "The online shopping from tribrid has a great collection of trendy clothes which seems to fulfil all your fashionable needs in reasonable price"</p>
     <h5>Anisha Khadka-Web Designer</h5>
  </div>
</div>


     


 </>
)
}
