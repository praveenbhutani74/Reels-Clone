import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import MovieIcon from '@material-ui/icons/Movie';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@mui/material/Alert';

function VideoFeed({ Data }) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [progress, setProgress] = useState(0);

    const UploadOnCickBtn=(e)=>{
        const file=e.target.files[0];
        if(file==null){
            setError("Please Select a file");
            setTimeout(()=>{
                setError('');
            },2000)
            return;
        }
        if((file.size)/(1024*1024))<40){
            
        }



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
                loading && <LinearProgress variant="determinate" value={20} style={{ marginTop: '0.5rem' }} />
            }

        </div>
    )
}

export default VideoFeed