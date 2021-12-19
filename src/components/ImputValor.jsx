import React from 'react';
import PropTypes from 'prop-types';

class ImputValor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, func } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          <span className="text-inputs-wallet-page">Valor</span>
          <input
            type="number"
            id="valor"
            name="value"
            value={ value }
            onChange={ (e) => func(e) }
            className="input-group-text inputs-wallet"
            // placeholder="Valor"
          />
        </label>
      </div>

    );
  }
}

ImputValor.propTypes = {
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default ImputValor;
