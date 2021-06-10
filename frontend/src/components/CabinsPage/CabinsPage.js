import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import CabinCard from './CabinCard';
import LoadingSpinner from '../LoadingSpinner';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: 10,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 300,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CabinsPage = () => {
  const [cabins, setCabins] = useState([]);
  const [filteredCabins, setFilteredCabins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchCategory, setSearchCategory] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const classes = useStyles();

  useEffect(() => {
    const fetchCabins = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/api/cabins`);
        setCabins(data.cabins);
        setFilteredCabins(data.cabins);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    fetchCabins();
  }, []);

  const searchHandler = () => {
    if (searchCategory === 'pricePerNight') {
      setFilteredCabins(
        cabins.filter(cabin => +cabin.pricePerNight <= +searchKeyword)
      );
    } else if (searchCategory === 'location') {
      setFilteredCabins(
        cabins.filter(cabin => {
          return (
            cabin.address.city.toLowerCase().includes(searchKeyword) ||
            cabin.address.state.toLowerCase().includes(searchKeyword) ||
            +cabin.address.zipCode === +searchKeyword
          );
        })
      );
    }
  };

  return (
    <div>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        p={1}
        m={1}
      >
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Search by
          </InputLabel>
          <Select onChange={e => setSearchCategory(e.target.value)} required>
            <MenuItem value="location">Location</MenuItem>
            <MenuItem value="pricePerNight">Max Price</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className={classes.formControl}
          value={searchKeyword}
          variant="outlined"
          onChange={e => setSearchKeyword(e.target.value.toLowerCase())}
        />
        <Button
          variant="outlined"
          className={classes.formControl}
          onClick={searchHandler}
        >
          Search
        </Button>
      </Box>
      <Typography align="center" variant="h4">
        Our Cabins
      </Typography>
      <Typography align="center" variant="h5">
        Showing {filteredCabins.length} of {cabins.length} cabins for rent
      </Typography>

      {loading && <LoadingSpinner />}
      {filteredCabins.length === 0 && !loading && (
        <p style={{ color: 'red', textAlign: 'center' }}>
          Sorry, no results. Try again.
        </p>
      )}

      <Grid container justify="center">
        {filteredCabins.length > 0 &&
          filteredCabins.map(cabin => <CabinCard cabin={cabin} />)}
      </Grid>
    </div>
  );
};

export default CabinsPage;
