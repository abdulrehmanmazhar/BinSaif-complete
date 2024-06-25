import React from 'react'
import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function Signup() {
    const [isLogin, setIsLogin] = useState(true);

    const switchToSignup = () => setIsLogin(false);
    const switchToLogin = () => setIsLogin(true);
    let styles = {
      padding:{
        position: 'relative',
        top: '68px',
        padding: '3rem 0 3rem 0'
    }}
  
    return (
      <div className="App">
            {/* <div style={styles.padding}></div> */}

        {isLogin ? (
          <LoginForm switchToSignup={switchToSignup} />
        ) : (
          <SignupForm switchToLogin={switchToLogin} />
        )}
      </div>
    );
}

export default Signup