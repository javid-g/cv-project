import React, { Component } from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';

class PreviewPersonal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstName, lastName, phoneNum, email, linkedIn, gitHub } = this.props;
    const line1 = phoneNum && email ? "/" : "";
    const line2 = email && linkedIn ? "/" : "";
    const line3 = linkedIn && gitHub ? "/" : "";

    return(
      <Wrapper>
      <div>
        <StyledHeader>
          <Typography variant="h4" component="h2">
            {firstName} {lastName}
          </Typography>
        </StyledHeader>
        <StyledInfo>
        <Typography variant="h6" component="h2">
          {phoneNum} {line1} {email} {line2} {linkedIn} {line3} {gitHub}
        </Typography>
        </StyledInfo>
        <Line></Line>
      </div>
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
