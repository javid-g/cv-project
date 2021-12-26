import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

class ExperienceInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange, handleExpChange, handleSubmit, handleAdd, handleMultipleAdd } = this.props;

        return (
            <div id="results" className="search-results">
              <Grid container direction={"column"} spacing={4} align = "center" justify = "center" alignItems = "center">
                <Grid container direction={"row"} spacing={2} align = "center" justify = "center" alignItems = "center">
                  <Grid item>
                  <TextField
                      required
                      id="standard-required"
                      label="Position"
                      variant="standard"
                      name="position"
                      type="text"
                      placeholder="Developer"
                      onChange={handleExpChange}
                      />
                  </Grid>
                  <Grid item>
                    <TextField
                        required
                        id="standard-required"
                        label="Company"
                        variant="standard"
                        name="company"
                        type="text"
                        placeholder="Facebook"
                        onChange={handleExpChange}
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
                        name="start"
                        type="text"
                        placeholder="Sep, 2020"
                        onChange={handleExpChange}
                      />
                  </Grid>
                  <Grid item>
                    <TextField
                        required
                        id="standard-required"
                        label="End Date"
                        variant="standard"
                        name="end"
                        type="text"
                        placeholder="Sep, 2025"
                        onChange={handleExpChange}
                      />
                  </Grid>
                  <Grid container direction={"row"} spacing={2} align = "center" justify = "center" alignItems = "center">
                  <Grid item>
                    <TextField
                        required
                        id="standard-required"
                        label="Responsibilities"
                        variant="standard"
                        name="achievements"
                        type="text"
                        placeholder="~ ~ ~"
                        onChange={handleExpChange}
                      />
                  </Grid>
                  </Grid>
                  </Grid>
                  <DivWrapper>
                    <Grid container direction={"column"} spacing={6} align = "center" justify = "center" alignItems = "center">
                      <Grid item>
                        <Button variant="contained" size="small" onClick={handleMultipleAdd}>Add Another</Button>
                      </Grid>
                    </Grid>
                  </DivWrapper>
              </Grid>
            </div>
          )
        }
      }


export default ExperienceInput;

const DivWrapper = styled.div`
  display: flex;
  margin: 1.5rem;

`
