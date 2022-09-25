import React, { Component } from "react";

class Form extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
  }


  render(){
    const {form} = this.props
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input 
          type="text"
          placeholder="Nombre..."
          name="name"
          value={form.name} 
          onChange={this.props.handleOnChange}
          />
          <button type="submit">Enviar</button>
        </form>
      </section>
    )
  }

}

export default Form