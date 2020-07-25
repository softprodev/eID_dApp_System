import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import { Link, Router } from '../../routes';
import verify from '../../ethereum/academic/verify';
const path = require('path');
//const fs = require('fs-extra');

class CertificateIndex extends Component {
  state = {
    selectedFile: null,
    hashValue: '',
    certIssuer: '',
    errorMessage: '',
    loading: false
  };

  onFileChange = event => {
    this.setState({
      selectedFile: event.target.files[0],
      errorMessage: ''
    });

    const curFile = event.target.files[0];
    const reader = new FileReader();
    var that = this;
    reader.readAsText(curFile);
    reader.onload = function (e) {
      //console.log('file:', e.target.result);
      let jsonData = JSON.parse(this.result);
      that.setState({ certIssuer: jsonData.issuers[0].address })
      console.log(that.state.certIssuer);

      // hash json
      let reader = new FileReader();
      reader.readAsArrayBuffer(curFile);
      reader.onload = function (e) {
        var wordArray = CryptoJS.lib.WordArray.create(reader.result);
        var hash = CryptoJS.SHA256(wordArray).toString();
        this.hashValue = hash;
        that.setState({ hashValue: hash });
        console.log(that.state.hashValue);
      };
    };

    // build json
    // const buildPath = path.resolve(__dirname, 'build');

    // // const source = fs.readFileSync(jsonData, 'utf8');
    // // const output = solc.compile(source, 1).contracts;

    // fs.ensureDirSync(buildPath);

    // //console.log(output);
    // fs.outputJsonSync(
    //   path.resolve(buildPath, 'certificate.json'),
    //   jsonData
    //   );
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
        </div>
      );
    }
  };

  onClick = async () => {
    this.setState({ loading: true, errorMessage: '' });

    //console.log(this.state.hashValue);
    try {
      const accounts = await web3.eth.getAccounts();
      await verify.methods.validation(this.state.hashValue).send({
        from: accounts[0]
      });

      await verify.methods.legality(this.state.certIssuer).send({
        from: accounts[0]
      });

      Router.pushRoute(`/Academic/certificates/${this.state.hashValue}/success`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  }

  render() {
    return (
      <Layout>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"></script>
        <h1>Verify Certificates</h1>
        <Form error={!!this.state.errorMessage}>
          <h3>Choose a JSON file</h3>
          <input
            type="file"
            onChange={this.onFileChange}
            accept="application/json"
            style={{ marginBottom: 20 }}
          />
          {this.fileData()}
          <a>
            <Button
              onClick={this.onClick}
              loading={this.state.loading}
              content='Verify'
              icon='check circle outline'
              primary={true}
              style={{ marginTop: 20 }}
            />
          </a>
          <Message error header="Oops!" content={this.state.errorMessage} />
        </Form>
      </Layout>
    );
  }
}

export default CertificateIndex;