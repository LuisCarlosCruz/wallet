import React from 'react';

class TableExpenses2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <tr>
        <th> Descrição </th>
        <th> Tag </th>
        <th> Pagamento </th>
        <th> Valor </th>
        <th> Moeda </th>
        <th> Câmbio utilizado </th>
        <th> Valor Convertido </th>
        <th> Moeda de Conversão </th>
        <th> Excluir </th>
      </tr>
    );
  }
}

export default TableExpenses2;
