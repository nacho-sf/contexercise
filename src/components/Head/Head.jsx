import React, { Component } from "react";
import {userContext} from '../../context/userContext';

class Head extends Component {
  render() {
    return <fieldset>
        <legend>Header</legend>
        <userContext.Consumer>
          {(data) => {
            return <p>{data.user}</p>
            }
          }
        </userContext.Consumer>
      </fieldset>;
  }
}

export default Head;
