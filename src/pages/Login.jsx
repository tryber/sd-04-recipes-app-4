import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setLogin } from '../actions';
import { saveToLocalStorage } from '../service/localStorage';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const [disable, setDissable] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');

  const { sendUser } = props;

  const handleLogin = () => {
    saveToLocalStorage('mealsToken', 1);
    saveToLocalStorage('cocktailsToken', 1);
    saveToLocalStorage('user', { email });
    sendUser(email, password);

  };

  const validateEmail = (emailAdress) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (validateEmail(email) && password.length > 6) {
      setDissable(false);
    }
  }, [email, password]);

  return (
    <div>
      <form>
        <label>
          email:
          <input
            type="email"
            data-testid="email-input"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label>
          senha:
          <input
            type="password"
            data-testid="password-input"
            onChange={(e) => setSenha(e.target.value)}
          ></input>
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
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  sendUser: (user, password) => dispatch(setLogin(user, password)),
});

export default connect(null, mapDispatchToProps)(Login);
