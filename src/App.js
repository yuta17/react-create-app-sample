import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  textbox: {
    backgroundClor: '#ECECEC',
    margin: 10,
  },
  normal: {
  },
  three: {
    fontSize: '40px'
  }
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({count: this.state.count + 1});
  }

  getIsThree() {
    return this.state.count % 3 == 0 && this.state.count != 0 ? styles.three : styles.normal;
  }

  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Reactへようこそ</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TextField
          hintText="あなたのお名前"
          style={styles.textbox}
        /><br />
        <TextField
          hintText="お問い合わせ内容"
          style={styles.textbox}
          multiLine={true}
          rows={2}
        /><br />
        <RaisedButton primary={true} label="送信" onClick={this.tick}/>
        <p style={this.getIsThree()}>{this.state.count}回送信しました!</p>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
