import React from 'react';
import PropTypes from 'prop-types';

class ImputTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { tag, func } = this.props;
    return (
      <div>
        <label htmlFor="tag" className="label-select-currency">
          <span className="text-inputs-wallet-page">Tag</span>
          <select
            className="input-group-text inputs-select-wallet"
            name="tag"
            id="tag"
            value={ tag }
            onChange={ (e) => func(e) }
          >
            <option className="option-currency" value="Alimentacao">Alimentação</option>
            <option className="option-currency" value="Lazer">Lazer</option>
            <option className="option-currency" value="Trabalho">Trabalho</option>
            <option className="option-currency" value="Transporte">Transporte</option>
            <option className="option-currency" value="Saude">Saúde</option>
          </select>
        </label>
      </div>

    );
  }
}

ImputTag.propTypes = {
  tag: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default ImputTag;
