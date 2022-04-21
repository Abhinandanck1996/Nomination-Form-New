import React, { useRef, useState } from 'react'

const Menu = () => {
    let DropdownRef = useRef()
    let [change, setChange] = useState(true)
    let HandleEvent = () => {
        setChange(!change)
        console.log(change);
        if (change===true) {
            DropdownRef.current.classList.add("open")
        }
        else {
             DropdownRef.current.classList.remove("open");
        }
    }
  return (
      <div className='MenuBlock'>
          <ul>
              <li><a href="#" className='active'>Home</a></li>
              <li><a href="#">Contactus</a></li>
              <li><a href="#" onClick={HandleEvent} onDoubleClick={HandleEvent}>Profile</a>
                  <ul className='dropdown' ref={DropdownRef}>
                      <li><a href="#">Update Profile</a></li>
                      <li><a href="#"> Update Account</a></li>
                      <li><a href="#"> Reset Password</a></li>
              </ul>
              </li>
          </ul>
          
    </div>
  )
}

export default Menu