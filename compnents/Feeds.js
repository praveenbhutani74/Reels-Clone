
import React from 'react'
import Navbar from './Navbar'
import VideoFeed from './VideoFeed'
import { Avatar } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
const Feeds = () => {
  return (
    <>
      <div className='Feed'>
        <Navbar />
        <VideoFeed />
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