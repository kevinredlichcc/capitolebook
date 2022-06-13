import '../styles/globals.css';
import '../styles/home.module.css';
import '@material-ui/core';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <Navbar />
      <Component {...pageProps} posts={posts} users={users} />
    </>
  );

  [];
}

export default MyApp;
