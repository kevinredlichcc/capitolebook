import * as React from 'react';
import Box from '@mui/material/Box';
import MCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import MCardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Card(props) {
  return (
    <MCard sx={{ minWidth: 275, boxShadow: 6, width: '50%' }}>
      <MCardContent>
        <Typography sx={{ fontSize: 24 }} color='text.secondary' gutterBottom>
          {props.users}
        </Typography>
        <Typography variant='h6' component='div'>
          {props.title}
        </Typography>
        <Typography variant='body2'>{props.body}</Typography>
      </MCardContent>
    </MCard>
  );
}
