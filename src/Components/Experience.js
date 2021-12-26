import React, { Component } from 'react';
import ExperienceInput from './ExperienceInput.js';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange, handleExp, handleExpChange, handleSubmit, handleAdd } = this.props;
    const { clicked } = this.props;

    return(
      <MainWrapper>
        <Grid container direction={"column"} spacing={4} align = "center" justify = "center" alignItems = "center">
        <Header>
          <Grid container direction={"row"} spacing={0} align = "center" justify = "center" alignItems = "center">

            <Grid item>
              <Typography variant="h6" component="h2">
                Experience
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={handleExp}>
                <AddCircleIcon />
              </IconButton>
            </Grid>

          </Grid>
          </Header>
          <Grid container direction={"row"} spacing={0} align = "center" justify = "center" alignItems = "center">
            {
              clicked ? <ExperienceInput handleExpChange={handleExpChange}/> : null
            }
          </Grid>
        </Grid>
      </MainWrapper>
    )
  }
}


export default Experience;

const MainWrapper = styled.main`
  display: flex;
  margin: 1.5rem;
  margin-top: 3rem;
`
const Header = styled.div`
  margin: 0.9rem;
`
