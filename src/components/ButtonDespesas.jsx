import React from 'react';
import PropTypes from 'prop-types';

class ButtonDespesas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { func } = this.props;
    return (
      <div className="btn-wallet-page">
        <button
          type="button"
          onClick={ () => func() }
          className="btn btn-outline-success"
        >
          Adicionar Despesa
        </button>
      </div>

    );
  }
}

ButtonDespesas.propTypes = {
  func: PropTypes.func.isRequired,
};

export default ButtonDespesas;
