import React, { useContext } from 'react'
import ProfileComp from '../../compnents/ProfileComp';
import { AuthContext } from '../../context/auth';
import { useRouter } from 'next/router';
import Navbar from '../../compnents/Navbar';

function Index() {




  return (
    <div>

<ProfileComp/>
      


    </div>
  )
}

export default Index