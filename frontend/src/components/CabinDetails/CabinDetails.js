import React, { useEffect, useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import LoadingSpinner from '../LoadingSpinner';

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
  paypal: {
    width: 200,
    margin: 20
  }
});

const CabinDetails = props => {
  const { name, pricePerNight, address, beds, baths, image, _id } =
    props.location.state;

  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [booking, setBooking] = useState(null);

  const classes = useStyles();

  //Add paypal script to the body of the page
  useEffect(() => {
    const paypalScript = async () => {
      const { data } = await axios.get('http://localhost:5000/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;

      document.body.appendChild(script);
      setSdkLoaded(true);
    };

    if (booking && !booking.isPaid) {
      if (!window.paypal) {
        paypalScript();
      } else {
        setSdkLoaded(true);
      }

    }
  }, [booking]);

  //Book cabin and save dates in database
  const bookingHandler = async () => {
    const newBooking = {
      checkIn: new Date('2021-12-21'), //change to calendar date picker
      checkOut: new Date('2021-12-23') //change to calendar date picker
    };
    try {
      const { data } = await axios.post(`http://localhost:5000/api/cabins/${_id}`, newBooking, { 'Content-type': 'application/json' });
      setBooking(data.booking);
      console.log(booking);
    } catch (err) {
      console.log(err.message);
    }
  };

  //When paypal payment is successful, update booking to paid status in database
  const successfulPaymentHandler = async (paymentResult) => {
    const { data } = await axios.patch(`http://localhost:5000/api/cabins/${_id}`, { paymentResult, booking }, { 'Content-type': 'application/json' });
    booking(data.booking);
  };

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
      {/* Pricing goes here */}

      <Button onClick={bookingHandler}>Book</Button>

      {/* PayPal buttons */}
      {booking && !booking.isPaid && (
        <Card className={classes.paypal}>
          {!sdkLoaded
            ? <LoadingSpinner />
            : <PayPalButton amount={booking.totalPrice} onSuccess={successfulPaymentHandler} />}
        </Card>
      )}
    </div>
  );
};
export default CabinDetails;
