import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Router } from '../../../routes';
import Layout from '../../../components/Layout';
import web3 from '../../../ethereum/academic/web3';
import verify from '../../../ethereum/academic/verify';

class Login extends Component {
  state = {
    schoolAddr: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      let flag = await verify.methods.verifyIsSchool(this.state.schoolAddr).call();
      if (!flag) throw " The Entity is NOT a Certificated School";

      if(this.state.schoolAddr!='0x0000000000000000000000000000000000000000')
        Router.pushRoute(`/Academic/school/${this.state.schoolAddr.toString()}/index`);

    } catch (err) {
      this.setState({ errorMessage: err });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1>Get into your Entity</h1>
        <br />
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <h3>School Entity Address</h3>
            <Input
              placeholder='school entity address (0x...)'
              value={this.state.schoolAddr}
              onChange={event =>
                this.setState({ schoolAddr: event.target.value })}
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