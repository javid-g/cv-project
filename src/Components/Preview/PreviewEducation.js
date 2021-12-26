import React, { Component } from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import { positions } from '@mui/system';
import { Grid } from '@material-ui/core';

class PreviewEducation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { clicked, university, location, program, startDate, endDate } = this.props;
    const header = university || program  > 0 ? "Education" : null;


    return(

      <Wrapper>
      <Grid container direction={"column"} spacing={40} align = "center" justify = "center" alignItems = "center">
        <Grid item  style={{paddingLeft: 0, paddingRight: 0}}>
          <Typography variant="h5" component="h2">
            {header}
            {header ? (<Line></Line>) : null}
          </Typography>
        </Grid>
          <Grid container direction={"row"} spacing={8} align = "left" justify = "left" alignItems = "left">
            <Grid item style={{paddingLeft: 0, paddingRight: 0}}>
              <Typography variant="h6" component="h2">
                {university}
              </Typography>
            </Grid>

            <Grid item >
              <Typography variant="h6" component="h2">
                {location}
              </Typography>
            </Grid>

          </Grid>
          <Grid container direction={"row"} spacing={8} align = "left" justify = "left" alignItems = "left">
            <Grid item style={{paddingLeft: 0, paddingRight: 0}}>
              <Typography variant="h6" component="h2">
                {program}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="h2">
                {startDate + ' -'}  {endDate}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>

    );
  }
}

export default PreviewEducation;

const Line = styled.div`
  border: 1px solid rgba(0, 0, 0, 1);
`

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
`;

const Info = styled.div`

`;
