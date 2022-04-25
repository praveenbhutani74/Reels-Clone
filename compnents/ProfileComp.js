import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/auth';
import { db } from '../firebase';

import Navbar from './Navbar';
function ProfileComp() {

  const {user}=useContext(AuthContext);
  const [Data,setData]=useState({});
  
  const[postid,setPostId]=useState([]);
  const[posts,setPosts]=useState([]);
  useEffect(()=>{
    if(user){
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      // console.log("Current data: ", doc.data());
      setData(doc.data());
      setPostId(doc.data().posts);
  });


  return ()=>{
    unsub();
  }
}

  },[user])  


 

  useEffect(()=>{

    let temparray=[];
    postid.map((postid,idx)=>{

     onSnapshot(doc(db,"posts",postid),(doc)=>{
        temparray.push(doc.data());
        setPosts([...temparray]);
      })
    })
  },[postid])
  
  const handleClick = (e) => {
    e.preventDefault();
    e.target.muted = !e.target.muted;
}



  return (
    <>
    <Navbar Data={Data} />

    <div className='max-width'>
        <div className='profile-upper'>

            <img src={Data?.photoUrl}
            // className='Profile-Image'
           style={{height:"10rem",width:"10rem",
           borderRadius:"50%"
           }} ></img>
           <div className='Profile-info'>
               <h2 >{Data?.name}</h2>
               <h3 >Posts : {Data?.posts?.length}</h3>
           </div>

        </div>
        <hr/>
        <div className='Video-posts'>
         {
                        posts.map((post,idx)=>(
                          <video  src={post?.postURL}   muted  onClick={handleClick} />
                        ))
                    } 
           
        </div>
    </div>

    
    </>
  )
}

export default ProfileComp