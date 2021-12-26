import React, { Component } from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';

class PreviewEducation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { clicked, university, location, program, startDate, endDate } = this.props;

  

    return(

      <div>
        <Typography variant="h4" component="h2">
          {university}
        </Typography>
      </div>

    );
  }
}

export default PreviewEducation;
