import React from 'react';

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

function index() {

    return (
        <div className="login-main">
            <div className='Login-carousel'>
                <div className='corousel-images'>
                <Carousel showThumbs={false} 
                infiniteLoop={true}
                interval={2000}
                autoPlay={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                
                >
               
               
                    <Image src={image1}></Image>
                    <Image src={image2}></Image>
                    <Image src={image3}></Image>
                    <Image src={image4}></Image>
                    
              
            </Carousel>


                </div>
            </div>
            <div className='login' >
            <div className="login-upper">

                <Image src={insta} style={{ marginTop: "1rem" }} />

                <TextField size='small' margin='dense' id="outlined-basic" label="Email" variant="outlined" fullWidth />
                <TextField size='small' id="outlined-basic" label="Password" type="password" variant="outlined" fullWidth margin='dense' style={{ marginTop: "1rem" }} />


                <Button variant="contained" fullWidth color="primary" component="span" style={{ marginTop: "1rem" }}>

                    Log In
                </Button>
                <Typography style={{ color: "blue", marginTop: "1rem" }}>
                    Forgot password?
                </Typography>

            </div>


            <div className="login-bottom">
                Dont Have an account? <span style={{ color: 'blue' }}> Sign up</span>
            </div>
        </div>
    </div>


    )
}
export default index;