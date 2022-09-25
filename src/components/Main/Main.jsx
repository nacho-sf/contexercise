import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

import Form from "./Form";
import Card from "./Card";

class Main extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      value:""
    };
  }

  
  handleChangeForm = (val) => {
    this.setState({
      value:val
    })
  }

  handleChangeCard = (val) => {
    this.setState({
      value:val
    })
  }

  render() {
    return (
      <fieldset>
        <legend>Main</legend>
          <Form 
            value={this.state.value}
            handleOnChange={this.handleChangeForm} 
            key={uuidv4()} />

          <Card
            value={this.state.value}
            handleOnChange={this.handleChangeCard} 
            key={uuidv4()} />
      </fieldset>
    )
  }
}

export default Main;
