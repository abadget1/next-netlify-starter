import React from 'react';

import { PauseCircleFilled, PlayCircleFilled } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import RegularButton from '@components/CustomButtons/Button';


const PlayPauseButton = ({ playing, muteButton }) => {
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      width:"3.25rem",
      height:"3.25rem",
      backgroundColor:"white",
      boxShadow:"sm",
      borderRadius:"50%",
      position:"fixed",
      right:"4rem",
      bottom:"2rem",
      color:"dark"
    }}>
      <Button simple onClick={muteButton}>
        {!playing ? (
          <>
            <Typography variant="body1" component="body1"style={{marginLeft: 0}}>
              <strong>Play</strong>
            </Typography>
            <PlayCircleFilled/>
          </>
        ) : (
          <>
            <Typography variant="body1" component="body1"style={{marginLeft: 0}}>
              <strong>Pause</strong>
            </Typography>
            <PauseCircleFilled/>
          </>
        )}
        </Button>
    </div>
  );
}

export default PlayPauseButton;
