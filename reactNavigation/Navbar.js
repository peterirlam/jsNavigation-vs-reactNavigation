import React, {useState} from 'react'

const Navbar = () => {
   const [navStatus, setnavStatus] = useState(false); 
   const [divWidth, setdivWidth] = useState('100%');

  const toggleNav = () => {
    if(!navStatus) {
      setdivWidth('0px');
      setnavStatus(true); 
    } else {
      setdivWidth('100%');
      setnavStatus(false); 
    }
  }
  
  return (
      <div className='main' style={{width: divWidth}}> 
        <button onClick={toggleNav}><i class="fas fa-bars"></i></button> 
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
  )
}

export default Navbar
