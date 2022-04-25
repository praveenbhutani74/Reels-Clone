import React, { useContext } from 'react'
import ProfileComp from '../../compnents/ProfileComp';
import { AuthContext } from '../../context/auth';
import { useRouter } from 'next/router';
import Navbar from '../../compnents/Navbar';

function index() {

    const {user}=  useContext(AuthContext);
    console.log(user);
    function Redirect() {
        const router = useRouter();
        router.push("/login");
        return null
      }
    
  return (
    <div>

        <ProfileComp/>


    </div>
  )
}

export default index