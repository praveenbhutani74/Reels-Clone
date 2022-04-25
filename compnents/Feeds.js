
import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import VideoFeed from './VideoFeed'
import { Avatar } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import { AuthContext } from '../context/auth';
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { Collections } from '@material-ui/icons';
import Post from './post';
const Feeds = () => {

  const {user}=useContext(AuthContext);
  const [Data,setData]=useState({});
  const[posts,setPosts]=useState([]);
  useEffect(()=>{
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      // console.log("Current data: ", doc.data());
      setData(doc.data());
  });

  return ()=>{
    unsub();
  }

  },[user])  

  useEffect(() => {
    const unsub = onSnapshot(query(collection(db, "posts"), orderBy('timestamp', "desc")), (snapshot) => {
        let tempArray = []
        snapshot.docs.map((doc) => {
            tempArray.push(doc.data())
        })
        setPosts([...tempArray])
        console.log(tempArray)
    })
    return () => {
        unsub();
    }
}, [])

const callback = (entries) => {
  entries.forEach((entry)=>{
      let ele = entry.target
      ele.play().then(()=>{
          if(!ele.paused && !entry.isIntersecting){
              ele.pause()
          }
      })
  })
}

let observer = new IntersectionObserver(callback,{threshold:0.8});

useEffect(()=>{
  const elements = document.querySelectorAll(".post video");
  elements.forEach((element)=>{
      observer.observe(element)
  })
  return ()=>{
      observer.disconnect();
  }
},[posts])


  return (
    <>
      <div className='Feed'>
        <Navbar Data={Data}  />
        <VideoFeed Data={Data} />
        <div className='video-feed'>
        {
                    posts.map((post, idx) => (
                        <Post postData={post} key={idx} />
                    ))
                }
       
        </div>


      </div>
    </>

  )
}

export default Feeds