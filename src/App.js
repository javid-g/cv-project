import React, { Component } from 'react';
import PreviewPersonal from './Components/Preview/PreviewPersonal.js';
import PreviewEducation from './Components/Preview/PreviewEducation.js';
import Personal from './Components/Personal.js';
import Education from './Components/Education.js';
import styled from 'styled-components';
import update from 'immutability-helper';
import { Backdrop } from '@mui/material';
import { Grid } from '@material-ui/core';

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
      },
      education: {
        clicked: 0,
        university: '',
        area: '',
        program: '',
        startDate: '',
        endDate: '',
      },
      educations: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEduChange = this.handleEduChange.bind(this);

  }

  handleChange(event) {
    const newState = update(this.state, {
      personal: {
        [event.target.name] : {$set: event.target.value},
      }
    })
    this.setState(newState);
  }

  handleEduChange(event) {
    console.log(event.target.value, event.target.name)
    const newState = update(this.state, {
      education: {
        [event.target.name] : {$set: event.target.value},
      }
    })
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
  }


  handleAdd(event) {
    const newState = update(this.state, {
      education: {
        clicked : {$set: this.state.education.clicked + 1},
      }
    })

    this.setState(newState);
  }

  render() {
    const { personal, education } = this.state;
    const { handleChange, handleEduChange, handleSubmit, handleAdd } = this;

    return(
      <div>

        <MainWrapper>

          <form onSubmit={handleSubmit}>
            <Personal
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <Education
              handleChange={handleChange}
              handleEduChange={handleEduChange}
              handleSubmit={handleSubmit}
              handleAdd={handleAdd}
              clicked={education.clicked}
              university={education.university}
              location={education.area}
              program={education.program}
              startDate={education.startDate}
              endDate={education.endDate}
            />
          </form>
        </MainWrapper>
          <PreviewWrapper>
            <PreviewPersonal
              firstName={personal.firstName}
              lastName={personal.lastName}
              phoneNum={personal.phoneNum}
              email={personal.email}
              linkedIn={personal.linkedIn}
              gitHub={personal.gitHub}
            />
          <PreviewEducation
            clicked={education.clicked}
            university={education.university}
            location={education.area}
            program={education.program}
            startDate={education.startDate}
            endDate={education.endDate}
          />
          </PreviewWrapper>

      </div>

    );
  }
}

export default App;

const MainWrapper = styled.main`
  display: flex;
  background-color: #CFAAF4;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4rem;
  max-width: 1800px;
  padding: 4rem 8rem;
  margin: 0 auto;
  margin-bottom: 0rem;
  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PreviewWrapper = styled.div`
  display: flex;
  background-color: #AAAAF4;
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
