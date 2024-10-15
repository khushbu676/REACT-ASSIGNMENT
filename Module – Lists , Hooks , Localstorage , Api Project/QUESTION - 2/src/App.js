import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Content from './components/Content';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={styles.container}>
      <Navigation isLoggedIn={isLoggedIn} handleAuth={handleAuth} />
      <Content isLoggedIn={isLoggedIn} />
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid lightgray',
    borderRadius: '10px',
    padding: '10px',
    width: '280px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9'
    
  },
};

export default App;

