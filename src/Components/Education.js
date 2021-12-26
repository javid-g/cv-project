import React, { Component } from 'react';
import EducationInput from './EducationInput.js';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange, handleEduChange, handleSubmit, handleAdd } = this.props;
    const { clicked } = this.props;

    return(
      <MainWrapper>
        <Grid container direction={"column"} spacing={4} align = "center" justify = "center" alignItems = "center">
        <Header>
          <Grid container direction={"row"} spacing={0} align = "center" justify = "center" alignItems = "center">
            <Grid item>
              <Typography variant="h6" component="h2">
                Education
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={handleAdd}>
                <AddCircleIcon />
              </IconButton>
            </Grid>

          </Grid>
          </Header>
          <Grid container direction={"row"} spacing={0} align = "center" justify = "center" alignItems = "center">
            {
              clicked ? <EducationInput handleEduChange={handleEduChange} /> : null
            }
          </Grid>
        </Grid>
      </MainWrapper>
    )
  }
}


export default Education;

const MainWrapper = styled.main`
  display: flex;
  margin: 1.5rem;
  margin-top: 3rem;
`
const Header = styled.div`
  margin: 0.9rem;
`
