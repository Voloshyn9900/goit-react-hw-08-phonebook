import React from 'react';
import { Wrapper } from './HomePage.styled';

const styles = {
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: '#fff',
  },
  text: {
    fontWeight: 500,
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
};

export default function HomePage() {
  return (
    <Wrapper>
      <h1 style={styles.title}>Welcome to our website</h1>
      <p style={styles.text}>
        The perfect digital notebook for organizing and keeping track of
        people's names and numbers.Simplify your life with our user-friendly
        platform designed for effective note-taking and seamless organization.
        Start managing your contacts efficiently today!
      </p>
    </Wrapper>
  );
}
