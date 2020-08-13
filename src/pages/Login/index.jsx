import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLogin } from '../../actions';
import { saveToLocalStorage } from '../../service/localStorage';
import Video from '../../images/video-bg.webm';

/** Styled Components */
import {
  LoginPage,
  AppLogo,
  LoginContainer,
  LoginForm,
  LoginInput,
  VideoBG,
  LoginButton,
} from './StyledComponents';

/**
 * Render the user login form
 * @param {function} setEmail - Hooks State | User email
 * @param {function} setSenha - Hooks State | User password
 * @param {function} handleLogin - Execute the user login
 * @param {boolean} disable - Inputs control state
 */

const renderForms = (setEmail, setSenha, handleLogin, disable) => (
  <>
    <LoginInput
      type="email"
      data-testid="email-input"
      placeholder="E-mail"
      onChange={(e) => setEmail(e.target.value)}
    />
    <LoginInput
      type="password"
      data-testid="password-input"
      placeholder="Senha"
      onChange={(e) => setSenha(e.target.value)}
    />
    <Link to="/comidas" style={{ opacity: '0', width: '0', height: '0' }}>
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
  </>
);

const Login = ({ sendUser, history }) => {
  const [disable, setDissable] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const [loginVisibility, setloginVisibility] = useState(false);

  const handleLogin = () => {
    saveToLocalStorage('mealsToken', 1);
    saveToLocalStorage('cocktailsToken', 1);
    saveToLocalStorage('user', { email });
    sendUser(email, password);
    history.push('/comidas');
  };

  const validateEmail = (emailAdress) => {
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    validateEmail(email) && password.length > 6 ? setDissable(false) : setDissable(true);
  }, [email, password]);

  return (
    <LoginPage>
      <VideoBG autoPlay muted loop id="myVideo">
        <source src={Video} type="video/webm" />
      </VideoBG>
      <AppLogo login={loginVisibility}>Ratatouille</AppLogo>
      <LoginContainer visible={loginVisibility}>
        <LoginForm>{renderForms(setEmail, setSenha, handleLogin, disable)}</LoginForm>
      </LoginContainer>
      <LoginButton
        type="button"
        onClick={() => (loginVisibility ? handleLogin() : setloginVisibility(true))}
        disabled={loginVisibility ? disable : false}
      >
        {loginVisibility ? 'OKAY' : 'LOGIN'}
      </LoginButton>
    </LoginPage>
  );
};

const mapDispatchToProps = (dispatch) => ({
  sendUser: (user, password) => dispatch(setLogin(user, password)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  sendUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);