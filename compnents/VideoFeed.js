import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import MovieIcon from '@material-ui/icons/Movie';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@mui/material/Alert';
import {v4 as uuidv4} from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { arrayUnion, doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';

import { db, storage } from '../firebase';

 function VideoFeed({ Data }) {
  

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [progress, setProgress] = useState(0);

    const UploadOnCickBtn = async (e)=>{
        const file= e.target.files[0];
        if(file==null){
            setError("Please Select a file");
            setTimeout(()=>{
                setError('');
            },2000)
            return;
        }
        if((file.size/(1024*1024))>100){
            setError("Size exceeds!! Size more than 40Mb");
            setTimeout(()=>{
                setError('');
            },2000)
            return;

        }
        let uid=uuidv4();
        setLoading(true);
        const storageRef = ref(storage, `posts/${uid}`);

        const uploadTask = uploadBytesResumable(storageRef, file);
  
        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
          
  
          },
          (error) => {
            setLoading(false);
            setProgress(0);
            setError(error.message);
            setTimeout(()=>{
                setError('');
            },2000)
            return;
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
             
              let obj={
               likes:[],
               postId:uid,
               postURL:downloadURL,
               postName:Data.name,
               profileURL:Data.photoUrl,
               uid:Data.uid,
               timestamp:serverTimestamp()
              }
            
              await setDoc(doc(db,"posts",uid),obj);
            
             await updateDoc(doc(db,"users",Data.uid),{
                    posts:arrayUnion(uid)
              })

              setLoading(false);
              setProgress(0);
  
            });
          }
        );



    }

    return (
        <div className='Upload-Button'>

            {
                error != '' ? <Alert severity="error">This is an error alert — check it out!</Alert> :
                    <Button variant="outlined" fullWidth color="primary" startIcon={<MovieIcon />} component="label" style={{ marginTop: "0.8rem" }}>
                    <input type="file" accept="video/*"   style={{display:"none"}} onChange={UploadOnCickBtn}/>  
                        Upload
                    </Button>
            }


            {
                loading && <LinearProgress variant="determinate" value={progress} style={{ marginTop: '0.5rem' }} />
            }

        </div>
    )
}

export default VideoFeed