
import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import VideoFeed from './VideoFeed'
import { Avatar } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import { AuthContext } from '../context/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
const Feeds = () => {

  const {user}=useContext(AuthContext);
  const [Data,setData]=useState({});
  useEffect(()=>{
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      console.log("Current data: ", doc.data());
      setData(doc.data());
  });

  return ()=>{
    unsub();
  }

  },[user])    


  return (
    <>
      <div className='Feed'>
        <Navbar Data={Data}  />
        <VideoFeed Data={Data} />
        <div className='video-feed'>
          {/* <div className='post'>
            <video />
          </div> */}
          <div className='post'>
            <video />
           
            <div className='videoFeed-information'>
              <div className='Avatar-Name'>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"  sx={{margin:'0.5rem'}}/>
                <p>Name</p>
              </div>
            
            <div className='like-info'>
              <FavoriteIcon fontSize='large'/>
              <p style={{marginLeft:"6px",marginTop:"7px"}}>13</p>
              <CommentIcon fontSize='large'/>
              </div>
            </div>
            
         
          </div>
             <div className='post'>
            <video />
           
            <div className='videoFeed-information'>
              <div>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"  sx={{margin:'0.5rem'}}/>
                Name
              </div>
            
            <div className='like-info'>
              <FavoriteIcon fontSize='large'/>
              13
              </div>
            </div>
            
         
          </div>
        </div>


      </div>
    </>

  )
}

export default Feeds