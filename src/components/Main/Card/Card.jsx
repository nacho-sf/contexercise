import React, { Component } from "react";

class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {state:""}
  }
  
  handleOnChange = (e) => {
    this.props.handleOnChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>Card</legend>
          <input 
            value={this.props.value} 
            onChange={(e) => this.handleOnChange(e)} />
      </fieldset>
    );
  }
}

export default Card