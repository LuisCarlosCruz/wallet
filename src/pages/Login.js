import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fazerLogin } from '../actions/index';
import walletImg from '../images/walletImg.svg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      btn: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  onSubmitForm() {
    const { history, dispatchValue } = this.props;
    const { email, password } = this.state;
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const min = 5;
    if (email.match(emailRegex) && password.length > min) {
      dispatchValue(email);
      history.push('/carteira');
    } else {
      alert('Insira os dados corretamente !');
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.validateEmail();
  }

  validateEmail() {
    const { email, password } = this.state;
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const min = 5;
    if (email.match(emailRegex) && password.length >= min) {
      this.setState({
        btn: false,
      });
    }
  }

  render() {
    const { email, btn } = this.state;
    return (
      <div>
        <p className="title-login-page">Welcome to your wallet</p>
        <div className="div-page-login">
          <div className="img-page-login">
            <img src={ walletImg } alt="logo wallet" />
          </div>
          <form className="form-input-login-page">
            <label htmlFor="email" className="form-label">
              <input
                data-testid="email-input"
                type="email"
                id="email"
                name="email"
                value={ email }
                onChange={ this.handleChange }
                placeholder="User"
                required
              />
            </label>
            <br />
            <label htmlFor="password" className="input-password-login-page">
              <input
                data-testid="password-input"
                type="password"
                id="password"
                name="password"
                onChange={ this.handleChange }
                placeholder="Password"
                maxLength="6"
                required
              />
            </label>
            <br />
            <button
              type="submit"
              disabled={ btn }
              onClick={ this.onSubmitForm }
              className="btn btn-success"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchValue: (stateComponent) => dispatch(fazerLogin(stateComponent)),
});

export default connect(null, mapDispatchToProps)(Login);
