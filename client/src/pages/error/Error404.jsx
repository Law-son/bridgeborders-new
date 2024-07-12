import React from 'react'
import image from '../../assets/errorIcons/404.jpg';

const Error404 = () => {
  return (
    <div style={styles.container}>
      <img src={image} alt="Page not found" style={styles.image} />
      {/* <h1 style={styles.heading}>404 Error</h1> */}
      <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
      <a href="/" style={styles.homeLink}>Go back to Home</a>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    animation: 'fadeIn 1s',
  },
  image: {
    width: '300px',
    marginBottom: '30px',
  },
  message: {
    fontSize: '1.5em',
    color: '#6c757d',
  },
  homeLink: {
    marginTop: '20px',
    fontSize: '1.2em',
    color: '#007bff',
    textDecoration: 'none',
  },
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  }
}

export default Error404
