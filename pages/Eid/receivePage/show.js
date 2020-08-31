import React, { Component } from 'react';
import { Button, Table, Label } from 'semantic-ui-react';
import Layout from '../../../components/EidUserLayout';
import Entity from '../../../ethereum/Eid/build/Entity.json';
import web3 from '../../../ethereum/web3';
import {CopyToClipboard} from 'react-copy-to-clipboard';


class PendingDataHelper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      {this.props.selfs}
      </>
    );
  }
}

class PendingData extends Component {
  //{this.props.joins.map(item => <td>{item}</td>)}
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      approval: props.selfs[3]
    }
  }   


    onClick = async () => {
      event.preventDefault();
      const entity = new web3.eth.Contract(Entity.abi, this.props.selfs[6]);
      let single = await entity.methods.isSingle.call();

      this.setState({ loading: true, errorMessage: '' });
      try{
        const accounts = await web3.eth.getAccounts();
        if(single)
          await entity.methods.approveDataToReceive(this.props.selfs[0] - 1)
          .send({from: accounts[0]});
        else
          await entity.methods.approveMultipleToReceive(this.props.selfs[6], this.props.selfs[0] - 1)
          .send({from: accounts[0]});
        
        this.setState({approval: true});
      } catch (err) {
        this.setState({ errorMessage: err.message });
      }

      this.setState({ loading: false });
    }

    render(){
      return (
        <>  
          <Table.Cell>{this.props.selfs[0]}</Table.Cell>
          <Table.Cell>
              {this.props.selfs[1].substring(0, 5) + '...'}
              <CopyToClipboard text ={this.props.selfs[0]}>
                <Label as='a' icon='copy' content='copy'></Label>
              </CopyToClipboard>
          </Table.Cell>
          <Table.Cell>{this.props.selfs[2]}</Table.Cell>
          <Table.Cell>
            {this.props.selfs[4].map(self => <Table.Row><PendingDataHelper selfs={self}></PendingDataHelper></Table.Row>)}
          </Table.Cell>
          <Table.Cell>
            {this.props.selfs[5].map(self => <Table.Row><PendingDataHelper selfs={self}></PendingDataHelper></Table.Row>)}
          </Table.Cell>
          <Table.Cell>
              {this.state.approval ? `Appproved!` : 
                <Button onClick={this.onClick} loading={this.state.loading} primary>Approve</Button>
              }
          </Table.Cell>
          
        </>
      );
    }
}

class Receive extends Component {
  state = {
    loading: false,
    errorMessage: ''
  };

  static async getInitialProps(props) {
    const {address} = props.query;
    const entity = new web3.eth.Contract(Entity.abi, address);

    let pendingLength = await entity.methods.pendingDataToReceiveCount().call();

    var pendingData = [];
    for(let i=0; i<pendingLength; i++){
      let arr = [];
      let Data = await entity.methods.pendingDataToReceive(i).call();
      arr[0] = i+1; // index of # 
      arr[1] = Data[0]; // source
      arr[2] = Data[2]; // description
      arr[3] = Data[3]; // status of approval

      let keys = [];
      let values = [];
      var keyLength = await entity.methods.dataSizeToReceive(i).call();
      for(let j=0; j<keyLength; j++){
        let object = await entity.methods.keyValueOfDataToReceive(i, j).call();
        keys[j] = object[0];
        values[j] = object[1];
      }
      arr[4] = keys; // key[]
      arr[5] = values; // value[]
      arr[6] = address;

      pendingData[i] = (arr);
    }
    
    return {pendingData};
  }

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    const { Header, Row, HeaderCell, Body } = Table;


    return (
      <Layout>
        <h1>Receive Data from Registry!</h1>
        <br />
        <Table>
          <Header>
            <Row>
              <HeaderCell>#</HeaderCell>
              <HeaderCell>Source</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Key</HeaderCell>
              <HeaderCell>Value</HeaderCell>
              <HeaderCell>Status</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.props.pendingData.map(self => <Table.Row><PendingData selfs={self}></PendingData></Table.Row>)}
          </Body>
        </Table>
      </Layout>
    );
  }
}

export default Receive;