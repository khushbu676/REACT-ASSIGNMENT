import React from 'react';

const Content = ({ isLoggedIn }) => {
  return (
    <div style={styles.content}>
      {isLoggedIn ? 'Private Views' : 'Public Views'}
    </div>
  );
};

const styles = {
  content: {
    height: '120px',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center', 
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',      
    margin: '10px 0',
    
    
  }
};

export default Content;
