import React from 'react';
import section2Images from './section2Images';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import './LandingPage.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',

    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MultiLineGrid() {
  const classes = useStyles();
  return (
    <div>
      <Typography style={{ margin: '1em 0 1em 0' }} variant="h4">
        Explore nearby
      </Typography>
      <div className={classes.root}>
        <GridList cols={4}>
          {section2Images.map(image => (
            <GridListTile
              key={image.img}
              classes={{ tile: 'multigrid-images', root: 'multigrid-div' }}
            >
              <img src={image.img} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
