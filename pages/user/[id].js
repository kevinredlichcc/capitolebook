import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './users.module.css';
import Navbar from '../components/Navbar';
import CardUser from '../components/CardUser';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { Box, CircularProgress } from '@mui/material';

function User() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users/' + id)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    Axios.get('https://jsonplaceholder.typicode.com/posts?userId' + id)
      .then((response) => {
        setPosts(response.data.slice(95, 100));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, setPosts]);

  return (
    <>
      <div>
        <Button
          sx={{ mt: 8, mb: 1, mx: 1, mr: 1, ml: 110 }}
          variant='outlined'
          size='small'
        >
          <Link href='/users'>Go back to users</Link>
        </Button>
      </div>
      {user === null ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 80px)',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div>
            <h1 className={styles['title']}>User Details:</h1>
            <h2 className={styles['name']}>Name: {user.name}</h2>
            <h4 className={styles['email']}>Email: {user.email}</h4>
            <p className={styles['street']}>Street: {user.address.street}</p>
            <p className={styles['suite']}>Suite: {user.address.suite}</p>
            <p className={styles['city']}>City: {user.address.city}</p>
            <p className={styles['zipcode']}>Zipcode: {user.address.zipcode}</p>
            <p className={styles['geolat']}>Latitude: {user.address.geo.lat}</p>
            <p className={styles['geolng']}>
              Longitude: {user.address.geo.lng}
            </p>
            <p className={styles['phone']}>Phone: {user.phone}</p>
            <p className={styles['website']}>Website: {user.website}</p>
            <p className={styles['companyname']}>
              Company: {user.company.name}
            </p>
            <p className={styles['phrase']}>
              Phrase: {user.company.catchPhrase}
            </p>
            <p className={styles['bs']}>BS: {user.company.bs}</p>
            <h2 className={styles['posts']}> Posts </h2>
          </div>
          {posts.map((post) => {
            return (
              <div className={styles['container']} key={user.id}>
                <div className={styles['user']} key={post.id}></div>
                <CardUser title={post.title} body={post.body} />
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
export default User;

// STATE LIFTING - https://reactjs.org/docs/lifting-state-up.html
