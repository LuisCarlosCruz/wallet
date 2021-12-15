import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleTotalDespesas = this.handleTotalDespesas.bind(this);
  }

  handleTotalDespesas() {
    const { despesa } = this.props;
    const total = [];
    despesa.forEach((desp) => {
      const objExchangeRates = desp.exchangeRates;
      total.push(objExchangeRates[desp.currency].ask * desp.value);
    });
    const totalDespesa = total.reduce((acc, value) => acc + value, 0);
    return `${totalDespesa.toFixed(2)}`;
  }

  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <div data-testid="email-field" className="div-user-wallet-page">
          <h5 className="welcome-user-wallet-page">P</h5>
          <h5>essoa</h5>
          <h5 className="welcome-user-wallet-page">U</h5>
          <h5>suária:</h5>
          <h5 className="name-user-wallet-page">
            {/* {userEmail} */}
            luis
          </h5>
        </div>

        <div data-testid="total-field" className="div-total-despesa-wallet-page">
          Total de despesas
          <span className="span-total-despesa-wallet-page">
            R$:
            { this.handleTotalDespesas() }
          </span>
        </div>

        <div data-testid="header-currency-field">
          Moeda de conversão BRL
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  despesa: PropTypes.arrayOf(PropTypes.object).isRequired,
  userEmail: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  userEmail: email,
  despesa: expenses,
});

export default connect(mapStateToProps)(Header);
