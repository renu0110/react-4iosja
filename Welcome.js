import React , { Component } from 'react';
// import { render } from 'react-dom';

export default class Welcome extends Component{
  render(){
    return <h2>Welcome {this.props.name} age {this.props.age} </h2>
    }
}