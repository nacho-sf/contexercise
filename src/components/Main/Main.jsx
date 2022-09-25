import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

import Form from "./Form";
//import Card from "./Card";

class Main extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      form:""
    };
  }


  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }  
  

  render() {
    return (
      <fieldset>
        <legend>Main</legend>
          <Form 
            value={this.state.value}
            handleOnChange={this.handleChange} 
            form={this.state.form}
            key={uuidv4()} />

          {/*<Card
            value={this.state.value}
            handleOnChange={this.handleChange} 
            key={uuidv4()} />*/}
      </fieldset>
    )
  }
}

export default Main;