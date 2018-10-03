import React, { Component } from 'react';
import { toastr } from 'react-redux-toastr'

import Messages from '../common/msg/messages'

class Home extends Component {
  componentDidMount() {
    toastr.error('Erro', 'Conta não ativada')
  }

  render() {
    return (
      <div>
        <header>
          Olá Mundo!
        </header>
        <Messages />
      </div>
    );
  }
}

export default Home;
