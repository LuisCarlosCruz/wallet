import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import currency from '../images/currency.png';

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
        <div className="div-user-wallet-page">
          <h5 className="pessoa-usuaria-green-wallet-page">P</h5>
          <h5 className="pessoa-usuaria-wallet-page">essoa</h5>
          <h5 className="pessoa-usuaria-green-wallet-page">U</h5>
          <h5 className="pessoa-usuaria-wallet-page">suária:</h5>
          <h5 className="pessoa-usuaria-green-wallet-page">
            {userEmail}
          </h5>
        </div>
        <div className="div-img-despesas-moeda">
          <div className="div-img-currency">
            <img src={ currency } alt="imagecurrency" className="img-currency" />
          </div>
          <div className="div-despesas-moeda">
            <div className="div-total-despesa-wallet-page">
              Total de despesas
              <span
                className={ this.handleTotalDespesas() === '0.00'
                  ? 'despesa-verde' : 'despesa-vermelha' }
              >
                R$:
                { this.handleTotalDespesas() }
              </span>
            </div>

            <div
              data-testid="header-currency-field"
              className="div-total-despesa-wallet-page"
            >
              <span>Moeda de conversão</span>
              <span className="moeda-conversao-wallet-page">BRL</span>
            </div>
          </div>
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
