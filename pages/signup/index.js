import React, { useContext, useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Image from 'next/image';
import insta from "../../assests/instagram.png"
import { Typography } from '@material-ui/core';
import  Link  from 'next/link';
import { AuthContext } from '../../context/auth';

function index(){
  const router=useRouter();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const [loading,setLoading]=useState(false);

  const{signup,user}=useContext(AuthContext);


    return(
        <div className="signup-main">
          <div className="signup-upper">

            <Image src={insta}  />
            <Typography margin='dense' style={{color:"#8E8E8E"}}>Sign up to see videos from your friends.</Typography>
          <TextField    size='small' margin='dense' id="outlined-basic" label="Email" variant="outlined" fullWidth value={email} onChange={(e)=>{setEmail(e.target.value)}}  />
          <TextField size='small' id="outlined-basic" label="Password" type="password" variant="outlined" fullWidth margin='dense' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          <TextField size='small' id="outlined-basic" label="Full Name" variant="outlined" fullWidth margin='dense' />
          <Button variant="outlined" color="primary"  fullWidth component="label" style={{marginTop:"0.8rem"}}>
              <input type="file" accept='image/*' style={{display:"none"}}></input>
          Upload
        </Button>
        <Button variant="contained"  fullWidth color="primary" component="span"  style={{marginTop:"0.8rem"}}>
             
          Sign Up
        </Button>
        <Typography margin='dense' style={{color:"#8E8E8E",marginTop:"1rem"}}>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</Typography>
          </div>

          
          <div className="signup-bottom">
          Have an account? <Link href="/login"><span style={{ color: 'blue',cursor:'pointer' }} > Log in</span></Link>
          </div>
        </div>


    )
}
export default index;