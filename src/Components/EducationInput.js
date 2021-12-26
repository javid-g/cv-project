import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

class EducationInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange, handleEduChange, handleSubmit, handleAdd, handleMultipleAdd } = this.props;


        return (
            <div id="results" className="search-results">
              <Grid container direction={"column"} spacing={4} align = "center" justify = "center" alignItems = "center">
                <Grid container direction={"row"} spacing={2} align = "center" justify = "center" alignItems = "center">
                  <Grid item>
                  <TextField
                      required
                      id="standard-required"
                      label="University"
                      variant="standard"
                      name="university"
                      type="text"
                      placeholder="University of Learning"
                      onChange={handleEduChange}
                      />
                  </Grid>
                  <Grid item>
                    <TextField
                        required
                        id="standard-required"
                        label="Location"
                        variant="standard"
                        name="area"
                        type="text"
                        placeholder="City, State"
                        onChange={handleEduChange}
                      />
                  </Grid>
                  <Grid item>
                    <TextField
                        required
                        id="standard-required"
                        label="Program"
                        variant="standard"
                        name="program"
                        type="text"
                        placeholder="Computer Science"
                        onChange={handleEduChange}
                      />
                  </Grid>
                </Grid>
                <Grid container direction={"row"} spacing={2} align = "center" justify = "center" alignItems = "center">
                  <Grid item>
                    <TextField
                        required
                        id="standard-required"
                        label="Start Date"
                        variant="standard"
                        name="startDate"
                        type="text"
                        placeholder="Computer Science"
                        onChange={handleEduChange}
                      />
                  </Grid>
                  <Grid item>
                    <TextField
                        required
                        id="standard-required"
                        label="End Date"
                        variant="standard"
                        name="endDate"
                        type="text"
                        placeholder="Computer Science"
                        onChange={handleEduChange}
                      />
                  </Grid>
                  </Grid>
                  <DivWrapper>
                    <Grid container direction={"column"} spacing={6} align = "center" justify = "center" alignItems = "center">
                      <Grid item>
                        <Button variant="contained" size="small" onclick={handleMultipleAdd}>Add Another</Button>
                      </Grid>
                    </Grid>
                  </DivWrapper>
              </Grid>
            </div>
          )
        }
      }


export default EducationInput;

const DivWrapper = styled.div`
  display: flex;
  margin: 1.5rem;

`
