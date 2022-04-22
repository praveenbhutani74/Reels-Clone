import React, { useContext } from 'react'
import ProfileComp from '../../compnents/ProfileComp';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/auth';

function index() {
  const {user}=useContext(AuthContext);


const Redirect=()=>{
  const router=useRouter();
  router.push("/login");
  return null;
}


  return (
    <>
    {
    user?.uid?<ProfileComp/>:<Redirect/>
}
    </>
  )
}

export default index;