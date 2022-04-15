import React from 'react'
import Button from '@material-ui/core/Button';
import MovieIcon from '@material-ui/icons/Movie';
import LinearProgress from '@material-ui/core/LinearProgress';

function VideoFeed() {
    return (
        <div className='Upload-Button'>
            <Button variant="outlined" fullWidth color="primary" startIcon={<MovieIcon />} component="label" style={{ marginTop: "0.8rem" }}>

                Upload
            </Button>
            <LinearProgress variant="determinate" value={20} style={{marginTop:'0.5rem'}} />
        </div>
    )
}

export default VideoFeed