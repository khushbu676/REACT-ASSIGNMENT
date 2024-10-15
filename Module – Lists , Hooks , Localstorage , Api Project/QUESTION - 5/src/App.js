import React, { useState } from 'react';
import './App.css';

function App() {
  // State to toggle between modals
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // Open/Close functions for both modals
  const openLoginModal = () => setShowLogin(true);
  const closeLoginModal = () => setShowLogin(false);
  
  const openRegisterModal = () => setShowRegister(true);
  const closeRegisterModal = () => setShowRegister(false);

  return (
    <div className="App">
      <h2>Modal login Form</h2>
      <button onClick={openLoginModal} className="open-modal-btn">Open modal</button>
      
      <h2>Modal Registration Form</h2>
      <button onClick={openRegisterModal} className="open-modal-btn">Open modal</button>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeLoginModal}>&times;</span>
            <h2>LOGIN TO MY ACCOUNT</h2>
            <form>
              <input type="email" placeholder="Email address" required />
              <input type="password" placeholder="Password" required />
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember Me On This Computer</label>
              </div>
              <button type="submit" className="login-btn">LOGIN</button>
            </form>
            <a href="#" className="forgot-password">Forgot Your Password?</a>
            <a href="#" className="create-account" onClick={() => {
              closeLoginModal();
              openRegisterModal();
            }}>Create A New Account</a>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {showRegister && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeRegisterModal}>&times;</span>
            <h2>CREATE A NEW ACCOUNT</h2>
            <form>
              <input type="email" placeholder="Email address" required />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm password" required />
              <button type="submit" className="register-btn">Register</button>
            </form>
            <a href="#" className="login-instead" onClick={() => {
              closeRegisterModal();
              openLoginModal();
            }}>Already have an account? Login</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
