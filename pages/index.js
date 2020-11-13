import React, { Component } from 'react';
import { Link } from '../routes';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import factory from '../ethereum/Vote/factory';
import { Card, Table, Image ,Alert,Modal} from 'react-bootstrap';
import web3 from '../ethereum/web3'
import { Router } from '../routes';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loading2: false,
      loading3: false,
      errorMessage: '',
      show:true,
      show_metamask_message:'',
      first_mount: true
    };
    // 為了讓 `this` 能在 callback 中被使用，這裡的綁定是必要的：
    this.goVote = this.goVote.bind(this);
    this.goAcademic = this.goAcademic.bind(this);
    this.gdNews = this.godNews.bind(this);
    this.goEid = this.goEid.bind(this);
    this.test = this.test.bind(this);
    this.hide= this.hide.bind(this);
  }
  componentDidMount() {
    if(this.state.first_mount){
      this.test();
      this.setState({first_mount: false});
    }
  }
  hide() {
    this.setState({show:false});
  }
  test() {
    if (typeof web3 !== 'undefined') {
      // console.log()
      if (web3.currentProvider.isMetaMask === true) {
        this.setState({show_metamask_message:'MetaMask is active'});
        // console.log('MetaMask is active')
      } else {
        this.setState({show_metamask_message:'MetaMask is not available'});
        // console.log('MetaMask is not available')
      }
    } else {
      this.setState({show_metamask_message:'web3 is not found'});
      // console.log('web3 is not found')
    }
  }
  async goVote(event) {
    Router.pushRoute(`/Vote/index`);
  }
  async goAcademic(event) {
    Router.pushRoute(`/Academic/index`);
  }
  async goEid(event) {
    Router.pushRoute(`/Eid/index`);
  }
  async godNews(event) {
    Router.pushRoute(`/dNews/index`);
  }
  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />

        <Container>
          <Navbar bg="dark" variant="dark" style={{ width: "100%" }}>
            <Navbar.Brand >E-Identity</Navbar.Brand>
            <Nav className="mr-auto" style={{ width: "50%", color: "white" }}>
              Welcome to the EID website!
            </Nav>
          </Navbar>
          
          <div style={{ margin: "auto" }}>
           
              <Modal show={this.state.show} onHide={this.hide}>
              <Modal.Header closeButton>
                <Modal.Title>Metamask status check</Modal.Title>
              </Modal.Header>
            
              <Modal.Body>
              <Alert key={1} variant={"danger"}>
                {this.state.show_metamask_message}
                </Alert>
              </Modal.Body>
            </Modal>
            
            <h2 style={{ margin: "auto", marginTop: "8%" }}>
              Go to Vote
              <Button
                variant="outline-info"
                style={{ width: '75%', margin: "auto", marginTop: "3%" }}
                onClick={this.goVote}
                loading={this.state.loading.toString()}>
                Go to Vote
              </Button>
            </h2>
            <h2 style={{ margin: "auto", marginTop: "10%" }}>
              Go to Academic
              <Button
                variant="outline-info"
                style={{ width: '75%', margin: "auto", marginTop: "3%" }}
                onClick={this.goAcademic}
                loading={this.state.loading2.toString()}>
                Go to Academic
              </Button>
            </h2>
            <h2 style={{ margin: "auto", marginTop: "10%" }}>
              Go to dNews
              <Button
                variant="outline-info"
                style={{ width: '75%', margin: "auto", marginTop: "3%" }}
                onClick={this.godNews}
                loading={this.state.loading2.toString()}>
                Go to dNews
              </Button>
            </h2>
            <h2 style={{ margin: "auto", marginTop: "10%" }}>
              Go to Entity Management
              <Button
                variant="outline-info"
                style={{ width: '75%', margin: "auto", marginTop: "3%" }}
                onClick={this.goEid}
                loading={this.state.loading3.toString()}>
                Go to Entity Management
              </Button>
            </h2>
          </div>
        </Container>
      </>
    )
  }
}

export default Index;