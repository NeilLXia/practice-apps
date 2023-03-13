import React from 'react';

export function LoginForm() {
 return (
  <div id="form-personal" className="form-container">
    <div className="container-header">
      <h3>LOGIN</h3>
      <div>Log in with your email address and password</div>
    </div>
    <div className="form-element email-element">
      <div className="form-label">Email</div>
      <input id="email-input" className="form-input" type="email" />
    </div>
    <div className="form-element password-element">
      <div className="form-label">Password</div>
      <input id="password-input" className="form-input" type="password" />
    </div>
    <button id="login-button">LOG IN</button>
  </div>
 )
};
