import React, { Component } from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

class PreviewPersonal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstName, lastName, phoneNum, email, linkedIn, gitHub } = this.props;
    const line1 = phoneNum && email ? "/" : "";
    const line2 = email && linkedIn ? "/" : "";
    const line3 = linkedIn && gitHub ? "/" : "";
    const lineDiv = firstName || lastName;

    return(
      <Wrapper>
      <Grid container direction={"column"} spacing={40} align = "center" justify = "center" alignItems = "center">
        <StyledHeader>
          <Typography variant="h3" component="h2">
            {firstName} {lastName}
          </Typography>
        </StyledHeader>
        <StyledInfo>
        <Grid item xs={12} style={{paddingLeft: 0, paddingRight: 0}}>
          <Typography variant="h6" component="h2">
            {phoneNum} {line1} {email} {line2} {linkedIn} {line3} {gitHub}
            {lineDiv ? (<Line></Line>) : null}
          </Typography>
        </Grid>
        </StyledInfo>

      </Grid>
      </Wrapper>
    );
  }
}

export default PreviewPersonal;

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Helvetica, sans-serif;
`;

const StyledHeader = styled.section`
  display: flex;
  font-size: 1.25rem;
  font-family: Helvetica, sans-serif;
  text-align: center;
  flex-direction: row;
  align-items: center;
  justify-content: center
`;

const StyledInfo = styled.h2`
  display: flex;
  font-size: 1rem;
  font-family: Helvetica, sans-serif;
  text-align: center;
  flex-direction: row;
  align-items: center;
  justify-content: center
`;

const Line = styled.div`
  border: 1px solid rgba(0, 0, 0, 1);
`
