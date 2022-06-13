import * as React from 'react';
import Box from '@mui/material/Box';
import MCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import MCardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    className='users-box'
    component='span'
    sx={{ display: 'inline-block', mx: '20px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Card(props) {
  return (
    <MCard sx={{ minWidth: 200 }}>
      <MCardContent>
        <Typography
          sx={{ fontSize: 14, mx: '10px', my: '10px' }}
          color='text.secondary'
          gutterBottom
        >
          {props.users}
        </Typography>
        <Typography variant='h5' component='div'>
          {props.title}
        </Typography>
        <Typography variant='body2'>{props.body}</Typography>
      </MCardContent>
      <CardActions>
        <Button size='small'>
          <a href='./user'>View User</a>
        </Button>
      </CardActions>
    </MCard>
  );
}
