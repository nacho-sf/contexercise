import React, { Component } from "react";

class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {value:""}
  }
  
  handleOnChange(e) {
    this.props.handleOnChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>Form</legend>
          <input 
            value={this.props.value} 
            onChange={(e) => this.handleOnChange(e)} />
      </fieldset>
    );
  }
}

export default Form