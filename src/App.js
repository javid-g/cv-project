import React, { Component } from 'react';
import styled from 'styled-components';
import update from 'immutability-helper';
import Preview from './Components/Preview.js';
import Personal from './Components/Personal.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        firstName: '',
        lastName: '',
        phoneNum: '',
        email: '',
        linkedIn: '',
        gitHub: '',
        /*can use html placeholder="placeholder_here"*/
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newState = update(this.state, {
      personal: {
        [event.target.name] : {$set: event.target.value},
      }
    })
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { personal } = this.state;
    const { handleChange, handleSubmit } = this;

    return(
      <MainWrapper>
        <form onSubmit={this.handleSubmit}>
          <Personal
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </form>
        <Preview
          firstName={personal.firstName}
          lastName={personal.lastName}
          phoneNum={personal.phoneNum}
          email={personal.email}
          linkedIn={personal.linkedIn}
        />
      </MainWrapper>
    );
  }
}

export default App;

const MainWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4rem;
  max-width: 1800px;
  padding: 4rem 8rem;
  margin: 0 auto;
  margin-bottom: 4rem;
  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
  }
`;
