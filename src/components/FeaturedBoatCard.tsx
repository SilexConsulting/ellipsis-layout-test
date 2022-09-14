import React, {useEffect, useState} from 'react';
import {Button, Card, CardContent, Grid, Typography} from '@mui/material';
import styles, {theme} from "../theme/theme";
import {makeStyles} from "@mui/styles";
import { useNavigate } from 'react-router';

const useStyles = makeStyles({
  cardTitle: {
    width: "100%",
    fontSize: 20,
    lineHeight: '1.5em',
    color: '#01173F',
  },
  cardSubtitle: {
    width: "100%",
    fontSize: 14,
    lineHeight: '20px',
    color: '#000',
  },
  headerImage: {
    position: "relative",
    width: "100%",
    cursor: "pointer",
    "& h6": {
      backgroundColor: "rgba(88, 183, 126, 0.85)",
      position: "absolute",
      top: "75%",
      height: "25%",
      width: "100%",
      display: "flex;",
      justifyContent: "center",
      alignItems: "center"
    }
  }
 }
);

interface OwnProps {
  isFullPage?: boolean;
}

const FeaturedBoatCard: React.FC<OwnProps> = (props) => {
  const classes = styles();
  const subClasses = useStyles();
  const navigate = useNavigate()


  const [isDesktop, setIsDesktop] = useState(window.innerWidth > theme.breakpoints.values['md']);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > theme.breakpoints.values['md']);
    }
    window.addEventListener('resize', handleResize)
  }, []);

  return (
    <Card style={{ flex: 1, borderRadius: '10px' }} onClick={() => navigate('/boat')}>
      <div style={{ position: 'relative' }} className={subClasses.headerImage}>
        <div style={{height: '200px', width: '100%', background: 'red'}} />
      </div>
      <CardContent>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography className={subClasses.cardTitle} data-cy="boat-name">
              The Argo
            </Typography>
          </Grid>
          <Grid item xs={12} md={'auto'}>
            <Typography className={subClasses.cardSubtitle} data-cy="boat-location">
              Some port way out there
            </Typography>
            <Typography className={subClasses.cardSubtitle} data-cy="boat-price">
              €500 / Per Day
            </Typography>
          </Grid>
          <Grid item xs='auto' alignItems={'flex-end'} justifyContent={'flex-end'}>
            <Button variant="contained" onClick={() => navigate('/boat')} >Book Now</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card >
  )
}

export default FeaturedBoatCard;
