import React, { Component } from 'react';
import styled from 'styled-components';

class Personal extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { handleChange, handleSubmit } = this.props;

    return(
      <div>
        <label>
          First Name:
          <input
            name="firstName" type="text" placeholder="John" onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName" type="text" placeholder="Smith" onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>
          Phone Number:
          <input
            name="phoneNum" type="text" placeholder="text" onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            name="email" type="text" placeholder="email@email.com" onChange={handleChange}
          />
        </label>
        <label>
          LinkedIn:
          <input
            name="linkedIn" type="text" placeholder="linkedin.com/in/your-account" onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit"/>
      </div>
    )

  }
}


export default Personal;
