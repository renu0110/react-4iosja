import React, { Component } from 'react';
import { render }  from 'react-dom';
import ReactDOM from 'react-dom';
import { Greet } from './Hello';
import Welcome from './Welcome';
import Message from './Message';
import Counter from './Counter';
import Small from './Small';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Greet name="Renuka" age="23"><p>I am the Leader</p></Greet>
        <Greet name="Shannu" age="22"/>
        <Greet name="Dinnu" age="24"/>
        <Welcome name="Renuka" age="23"/>
        <Welcome name="Shannu" age="23"/>
        <Welcome name="Dinnu" age="23"/>
        <Message /><br />
        <Counter />
        <Small />
      </div>
    );
  }
}

// function Welcome(props){
//   return <h1> Hi {props.name} </h1>;
// }

// var App = (
//   <div>
//   <Welcome name="Renuka" />
//   </div>
// );

render(<App /> , document.getElementById('root'));
