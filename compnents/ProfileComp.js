import React from 'react'

import Navbar from './Navbar';
function ProfileComp() {
  return (
    <>
    <Navbar/>

    <div className='max-width'>
        <div className='profile-upper'>

            <img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg"
            // className='Profile-Image'
           style={{height:"10rem",width:"10rem",
           borderRadius:"50%"
           }} ></img>
           <div className='Profile-info'>
               <h2 >Praveen Bhutani</h2>
               <h3 >Posts: 2</h3>
           </div>

        </div>
        <hr/>
        <div className='Video-posts'>
            <video src='https://youtu.be/2wUO2657VWY'/>
           
        </div>
    </div>

    
    </>
  )
}

export default ProfileComp