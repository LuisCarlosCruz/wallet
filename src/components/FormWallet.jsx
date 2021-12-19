import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionFunctionThunk2 } from '../actions';
import ImputValor from './ImputValor';
import ImputDescription from './ImputDescription';
import ImputTag from './ImputTag';
import ButtonDespesas from './ButtonDespesas';

class FormWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Trabalho',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleContadorDespesas = this.handleContadorDespesas.bind(this);
  }

  handleContadorDespesas() {
    const { id } = this.state;
    this.setState({ id: id + 1 });
  }

  handleOnClick() {
    const { functionThunk } = this.props;
    this.handleContadorDespesas();
    functionThunk(this.state);
  }

  handleOnChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { respostaAPI } = this.props;
    const { valor, description, moeda, method: metodoPag, tag } = this.state;
    return (
      <div>
        <form className="form-wallet-page">
          <ImputValor value={ valor } func={ this.handleOnChange } />
          <ImputDescription description={ description } func={ this.handleOnChange } />
          <label htmlFor="selectMoeda" className="label-select-currency">
            <span className="text-inputs-wallet-page">Moeda</span>
            <select
              className="input-group-text inputs-select-wallet"
              name="currency"
              id="selectMoeda"
              value={ moeda }
              onChange={ this.handleOnChange }
            >
              { respostaAPI ? respostaAPI
                .map((i) => (
                  i[0] !== 'USDT' ? (
                    <option className="option-currency" key={ i[0] }>
                      { i[0] }
                    </option>) : '')) : ''}
            </select>
          </label>
          <label htmlFor="selectMetodo" className="label-select-currency">
            <span className="text-inputs-wallet-page">Pagamento</span>
            <select
              className="input-group-text inputs-select-wallet"
              name="method"
              id="selectMetodo"
              value={ metodoPag }
              onChange={ this.handleOnChange }
            >
              <option value="Dinheiro" className="option-currency" selected>Dinheiro</option>
              <option value="Cartão de crédito" className="option-currency" selected>Cartão de crédito</option>
              <option value="Cartão de débito" className="option-currency" selected>Cartão de débito</option>
            </select>
          </label>
          <ImputTag tag={ tag } func={ this.handleOnChange } />
        </form>
        <ButtonDespesas func={ this.handleOnClick } />
        {/* <button type="button" onClick={ () => this.handleOnClick() }>
          Adicionar Despesa
        </button> */}
      </div>
    );
  }
}

FormWallet.propTypes = {
  respostaAPI: PropTypes.arrayOf(PropTypes.object).isRequired,
  functionThunk: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  functionThunk: (payload) => dispatch(actionFunctionThunk2(payload)),
});

export default connect(null, mapDispatchToProps)(FormWallet);
