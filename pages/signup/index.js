import React, { useContext, useEffect, useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Image from 'next/image';
import insta from "../../assests/instagram.png"
import { Typography } from '@material-ui/core';
import Link from 'next/link';
import { AuthContext } from '../../context/auth';
import { useRouter } from 'next/router';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
// import { async } from '@firebase/util';

function index() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signup, user } = useContext(AuthContext);


  const ClickOnsignUp = async () => {
    console.log(name);
    console.log(email);
    console.log(file);

    try {
      setLoading(true);
      setError('');
      const user = await signup(email, password);
      console.log(user.user.uid);
      console.log('signed up');
      const storageRef = ref(storage, `${user.user.uid}/Profile`);

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
          console.log('Upload is ' + progress + '% done');

        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(Error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            let obj={
              name:name,
              email:email,
              uid:user.user.uid,
              posts:[],
              photoUrl:downloadURL
            }
              setDoc(doc(db,"users",user.user.uid),obj);


          });
        }
      );


    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setTimeout(() => {
        setError('');
      }, 2000)
    }
    setLoading(false);
  }

  useEffect(() => {

    if (user) {
      router.push('/');
    }


  }, [user])

  return (
    <div className="signup-main">
      <div className="signup-upper">

        <Image src={insta} />
        <Typography margin='dense' style={{ color: "#8E8E8E" }}>Sign up to see videos from your friends.</Typography>
        <TextField size='small' margin='dense' id="outlined-basic" label="Email"
          variant="outlined" fullWidth value={email}
          onChange={(e) => { setEmail(e.target.value) }} />

        <TextField size='small' id="outlined-basic" label="Password"
          type="password" variant="outlined" fullWidth margin='dense'
          value={password} onChange={(e) => { setPassword(e.target.value) }} />

        <TextField size='small' id="outlined-basic" label="Full Name" value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined" fullWidth margin='dense' />

        <Button variant="outlined" color="primary" fullWidth
          component="label" style={{ marginTop: "0.8rem" }}>
          <input type="file" accept='image/*'
            style={{ display: "none" }} onChange={(e) => { setFile(e.target.files[0]) }} ></input>
          Upload
        </Button>

        <Button variant="contained" fullWidth color="primary"
          component="span" style={{ marginTop: "0.8rem" }} onClick={ClickOnsignUp} disabled={loading}>

          Sign Up
        </Button>
        <Typography margin='dense' style={{ color: "#8E8E8E", marginTop: "1rem" }}>
          By signing up, you agree to our Terms , Data Policy and Cookies Policy .</Typography>
      </div>


      <div className="signup-bottom">
        Have an account? <Link href="/login"><span style={{ color: 'blue', cursor: 'pointer' }} > Log in</span></Link>
      </div>
    </div>


  )
}
export default index;