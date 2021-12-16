import React from 'react';
import { connect } from 'react-redux';
import '../index.css';
import PropTypes from 'prop-types';
import TableExpenses2 from './TableExpenses2';
import { removeList } from '../actions';

class TableExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.HandleOnClick = this.HandleOnClick.bind(this);
  }

  HandleOnClick(id) {
    const { remove } = this.props;
    remove(id);
  }

  render() {
    const { propArrayDespesas } = this.props;
    return (
      <div className="div-tabela-despesas">
        <h3 className="title-tabela-despesas">Tabela de Desepesas</h3>
        <table className="table table-bordered">
          <thead className="thead-light">
            <TableExpenses2 />
          </thead>
          { propArrayDespesas.map((item) => (
            <tr key={ item.id }>
              <td>{ item.description }</td>
              <td>{ item.tag }</td>
              <td>{ item.method }</td>
              <td>{ item.value }</td>
              <td>
                {
                  item.exchangeRates[item.currency]
                    .name === /Dólar Americano/i ? 'Dólar Comercial'
                    : item.exchangeRates[item.currency].name.split('/', 1)
                }
              </td>
              <td>
                {
                  Number(item.exchangeRates[item.currency].ask).toFixed(2)
                }
              </td>
              <td>
                {
                  Number(item.exchangeRates[item.currency].ask * item.value).toFixed(2)
                }
              </td>
              <td> Real </td>
              <td>
                <button
                  type="button"
                  onClick={ () => this.HandleOnClick(item.id) }
                  data-testid="delete-btn"
                  className="btn btn-outline-danger btn-exclui-despesa"
                >
                  🗑
                </button>
              </td>
            </tr>
          )) }
        </table>
      </div>
    );
  }
}

TableExpenses.propTypes = {
  propArrayDespesas: PropTypes.objectOf.isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  propArrayDespesas: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (payload) => dispatch(removeList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableExpenses);
