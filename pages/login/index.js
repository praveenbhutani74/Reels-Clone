import React, { useContext, useEffect, useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Image from 'next/image';
import insta from "../../assests/instagram.png"
import { Typography } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../assests/image1.png';
import image2 from '../../assests/image2.png';
import image3 from '../../assests/image3.png';
import image4 from '../../assests/image4.png';
import { AuthContext } from '../../context/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Index() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login, user } = useContext(AuthContext);


    const LoginClickBtn = async () => {
        try {
            setLoading(true);
            setError('');
            await login(email, password);
            // router.push('/')

        } catch (err) {
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
        <div className="login-main">
            <div className='Login-carousel'>
                <div className='corousel-images'>
                    <Carousel showThumbs={false}
                        infiniteLoop={true}
                        interval={2000}
                        autoPlay={true}
                        showStatus={false}
                        showIndicators={false}
                    // showThumbs={false}

                    >


                        <Image src={image1} alt='Image1'></Image>
                        <Image src={image2} alt='Image1'></Image>
                        <Image src={image3} alt='Image1' ></Image>
                        <Image src={image4} alt='Image1'></Image>


                    </Carousel>


                </div>
            </div>
            <div className='login' >
                <div className="login-upper">

                    <Image src={insta} style={{ marginTop: "1rem" }} alt='Insta' />

                    <TextField size='small' margin='dense' id="outlined-basic" label="Email" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField size='small' id="outlined-basic" label="Password" type="password" variant="outlined" fullWidth margin='dense' value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginTop: "1rem" }} />

                    {
                        error != '' &&
                        <div style={{ color: 'red' }}>
                            {error}
                        </div>
                    }

                    <Button variant="contained" fullWidth color="primary" component="span" style={{ marginTop: "1rem" }}
                        onClick={LoginClickBtn} disabled={loading}
                    >

                        Log In
                    </Button>
                    <Link href="/forgotPassword" passHref ><Typography style={{ color: "blue", marginTop: "1rem", cursor: 'pointer' }}>
                        Forgot password?
                    </Typography></Link>

                </div>


                <div className="login-bottom">
                    Dont Have an account?<Link href="/signup" passHref><span style={{ color: 'blue', cursor: 'pointer' }} > Sign up</span></Link>
                </div>
            </div>
        </div>


    )
}
export default Index;