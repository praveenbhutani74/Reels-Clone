import { Avatar } from '@material-ui/core'
import React, { useContext, useEffect, useRef, useState } from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { AuthContext } from '../context/auth';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
import { db } from '../firebase';
// import { async } from '@firebase/util';





function Post({postData,Data}) {

  const videoRef = useRef(null);
  const {user}=useContext(AuthContext);
  const[like,setLike]=useState(false);


  useEffect(()=>{
    if(postData.likes.includes(user.uid)){
        setLike(true);
    }
    else{
      setLike(false);

    }


  },[postData])
  const handleLikeBtn= async()=>{

    if(like){
     await updateDoc(doc(db,"posts",postData.postId),{
       likes:arrayRemove(user.uid)
     })
    }
    else{
      await updateDoc(doc(db,"posts",postData.postId),{
        likes:arrayUnion(user.uid)
      })

    }
  }

  
  const handleClick = (e) => {
    console.log(e);
    e.preventDefault();
    e.target.muted = !e.target.muted;
}
const handleScroll = (e) => {
  let next = videoRef.current.parentNode.nextSibling

  if(next){
      next.scrollIntoView({behavior:"smooth"})
      e.target.muted = true
  }
}


  return (
    
    <div className='post' style={{display:"flex"}}>
     {/* <ReactPlayer url={postData.postURL} /> */}
    
     <video ref={videoRef} src={postData.postURL} muted    

      onClick={handleClick}
        onEnded={handleScroll}/>

    <div className='videoFeed-information' style={{ display:"flex", justifyContent:"space-evenly"}}>
      <div className='Avatar-Name' >
      <Avatar alt="Remy Sharp" src={postData.profileURL}  sx={{margin:'0.5rem'}}/>
        <p style={{marginLeft:"6px",marginTop:"7px"}}>{postData.postName}</p>
      </div>
    
    <div className='like-info' >
      <FavoriteIcon fontSize='large' style={like?{color:"red"}:{color:"white"}} onClick={handleLikeBtn}  />
  {postData.likes.length>0&&postData.likes.length}
     
      </div>
    </div>
    
 
  </div>
  )
}

export default Post