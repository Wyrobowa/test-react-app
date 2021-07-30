import React from 'react';
import PropTypes from 'prop-types';

const Login = ({ authenticate }) => (
  <nav className="login">
    <h2>Inventory login</h2>
    <p>Sign in to manage your store&rsquo;s inventory</p>
    <button className="facebook" onClick={() => authenticate('Facebook')}>Log in with Facebook</button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Login;
