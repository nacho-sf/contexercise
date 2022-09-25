import React, { Component } from "react";

class Card extends Component {

  render() {
    const {name, email, age, photo} = this.props;
    return (
      <fieldset>
        <legend>Card</legend>
            <h3>{name}</h3>
            <p>{email}</p> 
            <p>{age}</p>
            <img src={photo} alt={name} />
      </fieldset>
    );
  }
}

export default Card