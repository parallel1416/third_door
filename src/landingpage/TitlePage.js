'use client'
import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import ApppBar from './components/AppBar';
import { AppBar, Typography } from '@mui/material';
import './mystyles.css';


export default function TitlePage({changeScene}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleClick = () => {
    changeScene(1);
  };
  return (
    <>
      <CssBaseline />
      <ApppBar />
      <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      textAlign: 'center',
        cursor: 'pointer',
      }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
      <Typography variant="h1" >LATENT SPACE</Typography>
        <Typography variant="h2" color={isHovered ? '#000000' : '#ffffff'}>{isHovered ? 'Tap to create.' : 'A new way to create theatre.'}</Typography>
      </div>
    </>
  );
}
