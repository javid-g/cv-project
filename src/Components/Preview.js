import React, { Component } from 'react';


class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstName, lastName, phoneNum, email, linkedIn } = this.props;
    const line1 = phoneNum && email ? "|" : "";
    const line2 = email && linkedIn ? "|" : "";

    return(
      <div>
        <h1>{firstName} {lastName}</h1>
        <h2>{phoneNum} {line1} {email} {line2} {linkedIn}</h2>
      </div>
    );
  }
}

export default Preview;
