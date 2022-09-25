import React, { Component } from "react";

class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name:""
    }
  }
  
    onNameChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.setState({ name: e.target.name.value })
      alert("Datos de "+this.state.name+" enviados correctamente")
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
            onChange={ (e) => { this.props.onInputChange(e); 
              this.onNameChange(e); } }
            /><br/>

            <input 
            type="email"
            name="email"
            placeholder="Email..."
            value={this.props.email}
            onChange={this.props.onInputChange}
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