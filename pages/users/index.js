import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, Button, CircularProgress } from '@mui/material';
import styles from './users.module.css';
import Navbar from '../components/Navbar';
import Link from '@mui/material/Link';

function Users() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setUsers, setPosts]);

  return (
    <div>
      {users === null ? (
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
        users.map((user) => (
          <div className={styles.container} key={user.id}>
            <h3 className={styles.name}>{user.name}</h3>
            <p className={styles.email}>{user.email}</p>
            <Button variant='outlined'>
              <Link href={`/user/${user.id}`}>View user</Link>
            </Button>
            <box className={styles['box-btn']}></box>
          </div>
        ))
      )}
    </div>
  );
}

export default Users;

//
