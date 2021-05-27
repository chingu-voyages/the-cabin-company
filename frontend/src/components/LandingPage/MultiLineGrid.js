import React from 'react';
import section2Images from './section2Images';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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

export default function MultiLineGrid() {
  const classes = useStyles();
  return (
    <div>
      <Typography style={{ margin: '1em 0 1em 1em' }} variant="h4">
        Explore nearby
      </Typography>
      <div className={classes.root}>
        <GridList cols={4.5} style={{ justifyContent: 'space-evenly' }}>
          {section2Images.map(image => (
            <Card
              className={classes.root}
              style={{ margin: '1em 0 1em 0' }}
              variant="outlined"
            >
              <CardMedia
                className={classes.cover}
                image={image.img}
                alt={image.alt}
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {image.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {image.desc}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          ))}
        </GridList>
      </div>
    </div>
  );
}
