import React, { Component } from 'react';
import{Link}from '../routes';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {Card} from 'react-bootstrap';

import web3 from '../ethereum/web3'
import {Router}from '../routes';
import vote from '../ethereum/vote';
import registry from '../ethereum/registry';

const show_btn = function( stage ){
    if (stage != 0 ) return null;
    //console.log(stage);
    return (
        <div>this vote still needs setting please wait</div>
    );
};
class Register_btn extends Component{
//const register_btn =function ( stage ){
    constructor(props) {
        super(props);
        this.state ={
            registry_addr:""
        };
      }
    render(){
    //console.log(this.props.stage );
    if (this.props.stage != 1 ) return null;
  
    return (
        <>
        <FormControl type="text" placeholder="enter your registry number" className="mr-sm-2"
                value={this.state.registry_addr} 
                onChange = {event => this.setState({registry_addr:event.target.value})} />
        <Button variant="outline-info"style={{margin :"2%"}} onClick={this.props.register(this.state.registry_addr)}>register</Button>
        </>
    );
    }
};
class Vote_btn extends Component{
//const vote_btn =function (stage ){
    render(){
    if (this.props.stage != 2 ) return null;
  
    return (
        <>
        <Form style={{width:'33%', margin: 'auto', marginTop : "2%"}} onSubmit={this.props.vote}>
        <Form.Group >
            <Form.Control as="select" size="lg">
                {this.props.ops.map(op => <option>{op}</option>)}
                {/*<option>Korean Fish</option>
                <option>Donald Trump</option>
                <option>Xi DADA</option>*/}
            </Form.Control>
        </Form.Group>
        <Button variant="outline-info"style={{margin :"2%"}} type="submit">Vote</Button>
        </Form>
        </>
    );
    }
};

class Votesss extends Component {
    constructor(props) {
        super(props);
        this.state ={
          search:"",
          loading : false,
          loading2: false,
          stage:'',
          search:'',
          errorMessage:'',
          html_test:null,
          mailbox_addr:''
        };
      //console.log(props.query.address);//擷取這個網址的url那part的address(from routes??)  
      this.refresh_search = this.refresh_search.bind(this);
      this.register = this.register.bind(this);
      this.go_vote = this.go_vote.bind(this);
      //this.see_status = this.see_status(this);
      }
    static async getInitialProps(props){
        const{address, mb_addr} = props.query;
        const Vote_event =await vote(address);
        const stage = await Vote_event.methods.return_stage().call();
        
        const option_length = await Vote_event.methods.return_options_length().call();
        const stage_str =  (stage == 0)?"stage : Setup":
                           (stage == 1)?"stage : Register":
                           (stage == 2)?"stage : Vote":
                           (stage == 3)?"stage : Tally":
                           (stage == 4)?"stage : Finish":"stage : Setup";
        var options = [];
        for (let index = 0; index < option_length; index++) {
            let temp = await Vote_event.methods.return_options(index).call();
            options.push(temp);
        }
        return{address,Vote_event,stage,option_length,stage_str,options,mb_addr};
    }
    refresh_search(){
        if(this.state.search != "")
        Router.pushRoute(`/vote/${this.state.search}`);
        //console.log(this.props.address);
    }
    async register(registry_addr){
        //const accounts = await web3.eth.getAccounts();
        //await this.props.Vote_event.methods.register().send({from:accounts[0]});
    }
    async go_vote(){
        //const accounts = await web3.eth.getAccounts();
        //await this.props.Vote_event.methods.register().send({from:accounts[0]});
    }
   

    render() {
        return(
        <>
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>
         <Container>
         <Navbar bg="dark" variant="dark"style={{width:"100%"}}>
            <Navbar.Brand >Vote</Navbar.Brand>
             <Nav className="mr-auto" style={{width:"50%"}}>
                <Link route={"/home/"+ this.props.mb_addr }  ><a style={{color: "white", width:"100px"}}>Home</a></Link>
                <Link route={"/status/"+this.props.mb_addr+"/"+this.props.address} ><a style={{color: "white", width:"100px"}}>Status</a></Link>
                <Link route={"/index" }  ><a style={{color: "white", width:"100px"}}>Logout</a></Link>
             </Nav>
            
        </Navbar>
        <div style={{width: '100%'}}>
        <Form inline style={{ width: '33%' , margin: 'auto' , marginTop : "2%"}}>
            <div style={{color : "black"}} > inesrt your vote contract address here  -&gt;   </div>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"
                value={this.state.search} 
                onChange = {event => this.setState({search:event.target.value})} />
            <Button variant="outline-info" onClick={this.refresh_search}>Search</Button>
            </Form>
        <Card style={{ width: '33%' , margin: 'auto' , marginTop : "2%"}}>
            <Card.Body>
                <Card.Title>Election</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">voter address : 0xjxijwijswiw</Card.Subtitle>
                <Card.Text>
                    View the latest 2020 presidential polls and head-to-head match-up between Joe Biden and Donald Trump. For more information, view cnn.com/election.
                </Card.Text>
                <Card.Text>{this.props.stage_str}</Card.Text>
                {show_btn(this.props.stage)}
                <Register_btn stage ={this.props.stage} register = {this.register}></Register_btn>
                <Vote_btn stage ={this.props.stage} vote = {this.go_vote} ops = {this.props.options}></Vote_btn>
            </Card.Body>
        </Card>
        </div>
        <div style={{ width: '100%'}}>
        </div>
      </Container>
        </>
    )
    }
}


export default Votesss;