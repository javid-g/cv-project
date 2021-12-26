import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core';
import { Typography } from '@mui/material';

class Personal extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { handleChange, handleSubmit } = this.props;

    return(
      <MainWrapper>
      <div>
        <Grid container direction={"column"} spacing={3} align = "center" justify = "center" alignItems = "center">
          <Grid item>
            <Typography variant="h4" component="h2">
              Create a Tech Resume
            </Typography>
          </Grid>
            <GridBreak/>
          <Grid item>
            <Typography variant="h6" component="h2">
              Personal Info
            </Typography>
          </Grid>
              <GridBreak/>
          <Grid container direction={"row"} spacing={2} align = "center" justify = "center" alignItems = "center">
            <Grid item>
              <TextField
                  required
                  id="standard-required"
                  label="First Name"
                  variant="standard"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  onChange={handleChange}
                  />
              </Grid>
              <Grid item>
                <TextField
                    required
                    id="standard-required"
                    label="Last Name"
                    variant="standard"
                    name="lastName"
                    type="text"
                    placeholder="Smith"
                    onChange={handleChange}
                  />
              </Grid>
            </Grid>
              <GridBreak/>
            <Grid container direction={"row"} spacing={2} align = "center" justify = "center" alignItems = "center">
              <Grid item>
                <TextField
                    required
                    id="standard-required"
                    label="Phone Number"
                    variant="standard"
                    name="phoneNum"
                    type="text"
                    placeholder="(123)456-78-90"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id="standard-required"
                    label="Email"
                    variant="standard"
                    name="email"
                    type="text"
                    placeholder="email@email.com"
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id="standard-required"
                    label="LinkedIn"
                    variant="standard"
                    name="linkedIn"
                    type="text"
                    placeholder="linkedin.com/in/john-s"
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    id="standard-required"
                    label="GitHub"
                    variant="standard"
                    name="gitHub"
                    type="text"
                    placeholder="github.com/john-smith"
                    onChange={handleChange}
                    />
                  </Grid>
                  <input type="submit" value="Submit"/>
              </Grid>
            </Grid>
        </div>
      </MainWrapper>
    )

  }
}


export default Personal;

const MainWrapper = styled.main`
  display: flex;
`

export const GridBreak = styled.div`
  width: 100%
`;
