import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './posts.module.css';
import Card from '../components/Card';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Posts(props) {
  return (
    <div className={styles['post-container']}>
      <div>
        {(props.posts && props.posts.length === 0) ||
        (props.users && props.users.length === 0) ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'calc(100vh - 96px)',
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          props.posts &&
          props.posts.map((post) => {
            const user = props.users[Number(post.userId) - 1];
            return (
              <div className={styles['posts']} key={post.id}>
                <Card
                  title={post.title}
                  body={post.body}
                  name={user.name}
                  link={`/user/${user.id}`}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Posts;

// BUSCAR QUE ES KEY
