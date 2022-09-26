import React, { Component } from "react";
import {userContext} from '../../../context/userContext';

class Form extends Component {

  static contextType = userContext;

  constructor(props) {
    super(props)
  
    this.state = {
       email:""
    }
  }
  
    onNameChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }


    handleSubmit = (e) => {
      e.preventDefault();
      const data = this.context;
      data.login(this.state.email);
      this.setState({ name: e.target.email.value });
      alert("Datos de "+this.state.email+" enviados correctamente");
      e.target.reset();
      
    }
  
    render() {
      return (
        <fieldset>
          <legend>Form</legend>
          <form onSubmit={this.handleSubmit}>

            <input 
            type="text"
            name="name"
            placeholder="Nombre..."
            value={this.props.name}
            onChange={this.props.onInputChange}
            /><br/>

            <input 
            type="email"
            name="email"
            placeholder="Email..."
            value={this.props.email}
            onChange={ (e) => { this.props.onInputChange(e); 
              this.onNameChange(e); } }
            /><br/>

            <input 
            type="number"
            name="age"
            placeholder="Edad..."
            value={this.props.age}
            onChange={this.props.onInputChange}
            /><br/>

            <input 
            type="url"
            name="photo"
            placeholder="URL foto..."
            value={this.props.photo}
            onChange={this.props.onInputChange}
            /><br/>

            <input type="submit" value="Enviar" />

          </form>
        </fieldset>
      )
    }
  }

export default Form