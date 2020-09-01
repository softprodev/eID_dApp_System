import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Router } from '../../../routes';
import Layout from '../../../components/Layout';
import web3 from '../../../ethereum/academic/web3';
import verify from '../../../ethereum/academic/verify';

class Login extends Component {
  state = {
    ministryAddr: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      await verify.methods.ministryLogin(this.state.ministryAddr).send({ from: accounts[0] });

      Router.pushRoute(`/Academic/ministry/index`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1>Login your Entity</h1>
        <br />
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <h3>Ministry of Education Entity Address</h3>
            <Input
              placeholder='your entity address (0x...)'
              value={this.state.ministryAddr}
              onChange={event =>
                this.setState({ ministryAddr: event.target.value })}
            />
          </Form.Field>
          <a>
            <Button
              loading={this.state.loading}
              content='Login'
              icon='sign in'
              primary={true}
            />
          </a>
          <Message error header="Oops!" content={this.state.errorMessage} />
        </Form>
      </Layout>
    );
  }
}

export default Login;