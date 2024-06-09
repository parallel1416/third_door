'use client'
import * as React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import getLPTheme from './getLPTheme';
import Slider from './components/Slider';
import Button from '@mui/material/Button';

import pose from './images/pose.png';
import speech from './images/speech.png';
import set from './images/set.jpg';
import virtual from './images/virtual.jpg';
import mask from './images/mask.jpg';

import { useState, useEffect } from 'react';
import { styled } from "@mui/material";

const useStyles = styled(theme => ({
  fadeIn: {
    opacity: 1,
    transition: 'opacity 1s ease-in-out',
  },
  fadeOut: {
    opacity: 0,
  },
}));


export default function TheatrePage({ changeScene, position, changePosition }) {
  const [isVisible, setIsVisible] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);



  return (
    <>
      <CssBaseline />
    { position === 1 &&
      <div style={{
        position: 'absolute',
        top: '8%',
        left: '60%',
          width: '30%',
        }} className={isVisible ? classes.fadeIn : classes.fadeOut}>
        <Card sx={{
          maxHeight: '40vh', bgcolor: 'rgba(255, 255, 255, 0.4)', borderRadius: '10px', '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.5)',
            },
          overflow: 'hidden',
        }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="190"
              image={pose}
                alt="Pose Estimation"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Pose Estimation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Estimate the poses of actors on stage. Natural closing re-design and virtual characterization enabled.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <br></br>
        <Card sx={{
          maxHeight: '40vh', bgcolor: 'rgba(255, 255, 255, 0.4)', borderRadius: '10px', '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.5)',
            },
            overflow: 'hidden',
        }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="190"
              image={speech}
                alt="Speech to text"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Speech to text
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Real-time speech to text conversion. Context-aware subtitles generation and responsive stage enhancement.
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
          <br></br>
          <Typography variant='body2' color='rgba(255, 255, 255, 0.7)'> Tap anywhere in the background to continue.</Typography>
      </div>
      }
      {position === 2 &&
        <div style={{
          position: 'absolute',
          top: '8%',
          left: '10%',
          width: '30%',
          transition: 'opacity 0.5s ease-in-out, max-height 0.5s ease-in-out',
        }}>
          <Card sx={{
            maxHeight: '40vh', bgcolor: 'rgba(255, 255, 255, 0.4)', borderRadius: '10px', '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.5)',
            },
          }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={set}
                alt="AR-enhanced setting"
              />
              <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                Original AR hardware and software toolchain.
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  AR-enhanced setting
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Set the stage effortlessly with AR-powered tools. It's fast, precise, and easy to use.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <br></br>
          <Card sx={{
            maxHeight: '40vh', bgcolor: 'rgba(255, 255, 255, 0.4)', borderRadius: '10px', '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.5)',
            },
          }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={virtual}
                alt="Virtual object insertion"
              />
              <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                Unique rendering techniques. Shaders and special effects tailored for each play. 
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Virtual object insertion
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Add fully-animated virtual objects to the scene. Create a spectacle and blur the boundaries between reality and imagination.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <br></br>
          <Typography variant='body2' color='rgba(255, 255, 255, 0.7)'> Tap anywhere in the background to continue.</Typography>
        </div>
      }
      {position === 3 &&
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          width: '30%',
          transition: 'opacity 0.5s ease-in-out, max-height 0.5s ease-in-out',
        }}>
          <Card sx={{
            Height: '60%', bgcolor: 'rgba(255, 255, 255, 0.4)', borderRadius: '10px', '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.5)',
            },
          }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={mask}
                alt="Breaking the fourth wall"
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  Breaking the fourth wall
                </Typography>
                <Typography variant="body1" color="text.primary">
                  High levels of interactivity between the audience and the play.
                  We aim to create an immersive and game-like experience.
                </Typography>
                <Typography variant="body1" color="text.primary">
                  To bring lives into theatre, is to bring theatre into lives.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      }
      {position === 4 &&
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '30%',
        }}>
          <Slider/>
        </div>
      }
      {position === 5 &&
        <>
          <Card sx={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '30%',
            Height: '60px', bgcolor: 'rgba(255, 255, 255, 0)', borderRadius: '50px', '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid white',
          },
          textAlign: 'center',
        }}>
          <CardContent>
            <Typography variant="h4">Wearable AR glasses.</Typography>
          </CardContent>
          </Card>
          <Card sx={{
            position: 'absolute',
            top: '10%',
            left: '60%',
            width: '30%',
            Height: '60px', bgcolor: 'rgba(255, 255, 255, 0)', borderRadius: '50px', '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid white',
            },
            textAlign: 'center',
        }}>
          <CardContent>
            <Typography variant="h4">Record and broadcast any time.</Typography></CardContent>
        </Card>
        <Card sx={{
          position: 'absolute',
          top: '50%',
          left: '20%',
          width: '60%',
          Height: '100px', bgcolor: 'rgba(255, 255, 255, 0)', borderRadius: '50px', '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid white',
          },
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <CardContent>
            <Typography variant="h4">Let the show begin.</Typography>
            <Typography variant="h5">Tap the gray square below to enter.</Typography>
          </CardContent>
        </Card>      
      </>
      }
  </>
  );
}
