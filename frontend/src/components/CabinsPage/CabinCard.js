import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';

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
    width: 400,
  },
}));

const CabinCard = ({ cabin }) => {
  const classes = useStyles();
  let history = useHistory();

  const bookingHandler = () => {
    //history.push(`/cabin-details`);
    history.push({
      pathname: '/cabin-details',
      state: cabin,
    });
  };

  return (
    <Grid item xs={8}>
      <Card className={classes.root} variant="outlined">
        <CardMedia
          className={classes.cover}
          image={cabin.image}
          alt={cabin.name}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {cabin.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {cabin.address.city}, {cabin.address.state}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              ${cabin.pricePerNight}.00 per night
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              onClick={bookingHandler}
            >
              Details
            </Button>
          </CardActions>
        </div>
      </Card>
    </Grid>
  );
};

export default CabinCard;
