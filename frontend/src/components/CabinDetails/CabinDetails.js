import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DateRangePickerCalendar from './DateRangePicker/DateRangePickerCalendar';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CabinDetails = props => {
  const { name, pricePerNight, address, beds, baths, image } =
    props.location.state;
  const classes = useStyles();
  return (
    <div>
      <img src={image}></img>

      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {address.city}, {address.state}
          </Typography>
          <Typography variant="body2" component="p">
            {beds} beds
            <br />
            {baths} baths
          </Typography>
        </CardContent>
      </Card>

      {/* Calendar goes here */}
      <DateRangePickerCalendar />
      {/* Pricing goes here */}

      <Button>Book</Button>
    </div>
  );
};
export default CabinDetails;
