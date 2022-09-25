import React, { Component } from "react";

import Form from "./Form";
import Card from "./Card";

class Main extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name:"",
       email:"",
       age:"",
       photo:""
    }
  }
  
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }
  
  
    render() {
      return (
        <article>
          <Form 
          value={this.state.value}
          onInputChange={this.handleChange}
          />
          <Card 
            name = {this.state.name}
            email = {this.state.email}
            age = {this.state.age}
            photo = {this.state.photo}
          />
        </article>
      )
    }
  }

export default Main;