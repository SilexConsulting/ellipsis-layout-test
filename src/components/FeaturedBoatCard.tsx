import React from 'react';
import {Button, Card, CardContent, Grid, Typography} from '@mui/material';
import { useNavigate } from 'react-router';


interface OwnProps {
  isFullPage?: boolean;
}

const FeaturedBoatCard: React.FC<OwnProps> = (props) => {
  const navigate = useNavigate()

  return (
    <Card style={{ flex: 1, borderRadius: '10px' }} onClick={() => navigate('/boat')}>
      <div style={{ position: 'relative' }} >
        <div style={{height: '200px', width: '100%', background: 'red'}} />
      </div>
      <CardContent>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography  data-cy="boat-name">
              The Argo
            </Typography>
          </Grid>
          <Grid item xs={12} md={'auto'}>
            <Typography data-cy="boat-location">
              Some port way out there
            </Typography>
            <Typography  data-cy="boat-price">
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
