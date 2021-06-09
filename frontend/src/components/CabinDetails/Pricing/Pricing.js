import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Pricing.css';

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

export default function Pricing({ price, startDate, endDate }) {
  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;
  const numNights = startDate && endDate ? (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) : 0;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Price per night
        </Typography>
        {/* display pricePerNight x number of night */}
        <div className="price-details">
          <div>
            <Typography variant="body2" gutterBottom>
              ${price}
            </Typography>
          </div>
          <div>
            <Typography variant="body2">{numNights + ' nights'}</Typography>
          </div>
        </div>
        {/* Total: total to pay */}
        <div className="price-details">
          <div>
            <Typography variant="h6">Total:</Typography>
          </div>
          <div>
            <Typography variant="h5">${price * numNights}</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
