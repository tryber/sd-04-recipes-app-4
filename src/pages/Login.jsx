import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLogin } from '../actions';
import { saveToLocalStorage } from '../service/localStorage';

const renderForms = (setEmail, setSenha, handleLogin, disable) => (
  <form>
    <label>
      email:
      <input type="email" data-testid="email-input" onChange={(e) => setEmail(e.target.value)} />
    </label>
    <label>
      senha:
      <input
        type="password"
        data-testid="password-input"
        onChange={(e) => setSenha(e.target.value)}
      />
    </label>
    <Link to="/comidas">
      <button
        type="button"
        data-testid="login-submit-btn"
        minLength="7"
        onClick={(e) => handleLogin(e)}
        disabled={disable}
      >
        LOGIN
      </button>
    </Link>
  </form>
);

const Login = (props) => {
  const [disable, setDissable] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');

  const handleLogin = () => {
    saveToLocalStorage('mealsToken', 1);
    saveToLocalStorage('cocktailsToken', 1);
    saveToLocalStorage('user', { email });
    props.sendUser(email, password);
  };

  const validateEmail = (emailAdress) => {
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (validateEmail(email) && password.length > 6) {
      setDissable(false);
    }
  }, [email, password]);

  return <div>{renderForms(setEmail, setSenha, handleLogin, disable)}</div>;
};

Login.propTypes = {
  sendUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendUser: (user, password) => dispatch(setLogin(user, password)),
});

export default connect(null, mapDispatchToProps)(Login);
