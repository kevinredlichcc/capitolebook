import * as React from 'react';
import Box from '@mui/material/Box';
import MCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import MCardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function Card(props) {
  return (
    <MCard sx={{ minWidth: 275, boxShadow: 4, width: '50%' }}>
      <MCardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {props.name}
        </Typography>
        <Typography variant='h5' component='div'>
          {props.title}
        </Typography>
        <Typography variant='body2'>{props.body}</Typography>
      </MCardContent>
      <CardActions>
        <Button size='small'>
          <Link href={props.link}> View more from user </Link>
        </Button>
      </CardActions>
    </MCard>
  );
}
